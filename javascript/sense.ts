// You need to implement a **polyfill for** Promise.allSettledWithConcurrency(k), which behaves like Promise.allSettled() but with a key constraint:
function allSettledWithConcurrency(promises: Promise<any>[], concurrency: number) {
	return new Promise((resolve) => {
		const results = new Array(promises.length); // Store results in original order
		let index = 0; // Tracks the next promise to start
		let runningPromises = 0; // Tracks number of currently executing promises

		function processNext() {
			// If all promises are settled, resolve the final results array
			if (index >= promises.length && runningPromises === 0) {
				resolve(results);
				return;
			}

			// Start up to `k` concurrent promises
			while (runningPromises < concurrency && index < promises.length) {
				const currentIndex = index; // Preserve index for results storage
				index++;
				runningPromises++;

				// Handle promise resolution and rejection properly
				Promise.resolve(promises[currentIndex])
					.then((value) => {
						results[currentIndex] = { status: "fulfilled", value };
					})
					.catch((reason) => {
						results[currentIndex] = { status: "rejected", reason };
					})
					.finally(() => {
						runningPromises--;
						processNext(); // Start the next promise when one finishes
					});
			}
		}

		processNext(); // Kickstart the process
	});
}

const promiseMaker = (str: string, delay: number, reject = false) =>
	new Promise((res, rej) => {
		setTimeout(() => {
			if (!reject) return res(str);
			return rej(str);
		}, delay);
	});

const promise1 = promiseMaker("first", 1000);
const promise2 = promiseMaker("second", 2000);
const promise3 = promiseMaker("third", 2000);
const promise4 = promiseMaker("fourth", 400);

// console.time("allSettledWithConcurrency");
// console.log(await allSettledWithConcurrency([promise1, promise2, promise3, promise4], 2));
// console.timeEnd("allSettledWithConcurrency");

// console.time("Promise.allSettled");
// console.log(await Promise.allSettled([promise1, promise2, promise3, promise4]));
// console.timeEnd("Promise.allSettled");

// Implement a function createResilientAPI(apiFunction, maxFailures, resetTimeout) that **wraps an existing API function** to add the following resilience features:

async function sleep(millis: number): Promise<void> {
	return new Promise((res) =>
		setTimeout(() => {
			console.timeEnd("111");
			res();
		}, millis)
	);
}

function createResilientAPI(apiFunction: typeof unreliableAPI, maxFailures = 3, resetTimeout = 5000) {
	return async function wrapper() {
		let flag = false;
		let i = 0;
		while (i < maxFailures) {
			try {
				const res = await apiFunction();
				return res;
			} catch (error) {
				if (flag) return error;
			} finally {
				i++;
			}
			if (i >= maxFailures) {
				await sleep(resetTimeout);
				flag = true;
				i = maxFailures - 2;
			}
		}
	};
}

async function unreliableAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.7 ? resolve("✅ API Response!") : reject("❌ API Failure!");
			// return reject("❌ API Failure!");
			// resolve("✅ API Response!");
		}, 500);
	});
}
const resilientAPI = createResilientAPI(unreliableAPI, 3, 5000);

// try {
// 	const response = await resilientAPI();
// 	console.log(`🟢 Success: ${response}`);
// } catch (error) {
// 	console.log(`🔴 Failure: ${error}`);
// }

async function fetchWithAutoRetry(fetcher: (...args: any[]) => Promise<any>, maximumRetryCount: number) {
	return async function (...args: any[]) {
		let i = 0;
		while (i < maximumRetryCount) {
			try {
				const response = await fetcher(args);
				return response;
			} catch (error) {
				i++;
				if (i >= maximumRetryCount) return error;
			}
		}
	};
}
async function exampleFetcher() {
	const success = Math.random() > 0.2; // Simulating random success/failure
	if (success) {
		throw new Error("Fetcher failed");
	}
	return "Success!";
}

async function test() {
	try {
		const result = await fetchWithAutoRetry(exampleFetcher, 3);
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

// test();

function PromiseAny(promises: Promise<any>[]) {
	return new Promise((res, rej) => {
		let result: any = [];
		for (let i = 0; i < promises.length; i++) {
			promises[i]
				.then((data) => {
					return res(data);
				})
				.catch((e) => {
					result[i] = e;
				})
				.finally(() => {
					if (i === promises.length - 1) {
						return rej(result);
					}
				});
		}
	});
}
// const promises = [Promise.reject("Error 1"), Promise.reject("Error 2"), Promise.resolve("Success 3")];

// console.log(await PromiseAny(promises));

function deepCloneBhaskar<T>(data: T, seen = new WeakMap<object, any>()): T {
	if (data === null || !["object", "function"].includes(typeof data)) {
		return data;
	}
	if (seen.has(data as object)) return seen.get(data as object);

	if (typeof data === "function") {
		seen.set(data, data);
		return data;
	}
	if (Array.isArray(data)) {
		const result = [] as any;
		seen.set(data as object, result);
		data.map((item) => result.push(deepCloneBhaskar(item, seen)));
		return result;
	}
	const result = {} as any;
	seen.set(data as object, result);

	for (const key in data) {
		result[key] = deepCloneBhaskar(data[key], seen);
	}

	return result;
}
const circularObjV1 = {
	a: 1
};

let objV1 = {
	a: {
		b: {
			c: {
				d: 1
			}
		}
	},
	b: 2,
	c: 3
};
// @ts-ignore
circularObjV1.a = circularObjV1;

const objV2 = deepCloneBhaskar(circularObjV1);
const objV3 = objV1;

objV1.a.b.c.d = 10;

// console.log(circularObjV1);
// console.log(objV3.a.b.c.d);

// Example Nested Object
const data = {
	a: {
		b: {
			c: {
				d: 4
			},
			e: {
				f: {
					d: 14
				}
			}
		},
		c: {
			d: 10
		},
		x: {
			y: {
				z: {
					key: "value"
				}
			}
		}
	}
};

function findAllValuesOrObjectsByPartialKeyPathV1(obj: Object, keyPath: string) {
	const result: any[] = [];

	function loop(newObj: object, path: string, rank: number) {
		const splitPaths = path.split(".");
		const firstKey = splitPaths[rank];
		const isLast = rank === splitPaths.length - 1;
		for (const key in newObj) {
			const interObj = newObj[key as keyof typeof newObj];
			if (key === firstKey) {
				if (isLast) result.push(interObj);
				loop(interObj, path, rank + 1);
			} else if (typeof interObj === "object") {
				loop(interObj, path, rank);
			}
		}
	}

	loop(obj, keyPath, 0);
	return result;
}

// ✅ **Example Queries**
console.log(findAllValuesOrObjectsByPartialKeyPathV1(data, "a.b.c.d")); // Output: [4]
console.log(findAllValuesOrObjectsByPartialKeyPathV1(data, "b.c")); // Output: [{ d: 4 }] (Returns object)
console.log(findAllValuesOrObjectsByPartialKeyPathV1(data, "d")); // Output: [4, 14, 10] (All `d` values)
console.log(findAllValuesOrObjectsByPartialKeyPathV1(data, "x.a.b.c")); // Output: [] (Not found)
