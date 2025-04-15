function memo(fn: Function) {
	const map = new Map();
	return function internal(...args: any[]) {
		const key = JSON.stringify(args);
		if (map.has(key)) {
			return map.get(key);
		}
		const item = fn(...args);
		map.set(key, item);
		return item;
	};
}
type ARGS = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
async function sleeper2(delay: number) {
	return new Promise((res) => {
		setTimeout(res, delay);
	});
}
function cancellable2(fn: Function, args: ARGS[], delay: number) {
	const cancellable = setTimeout(() => fn(...args), delay);
	return () => clearTimeout(cancellable);
}

console.log(
	cancellable2(
		function (a: number, b: number) {
			return a + b;
		},
		[1, 24],
		3000
	)()
);

function promiseAll(promises: Array<Promise<unknown>>) {
	return new Promise(async (res, rej) => {
		const result: unknown[] = [];
		let completed = 0;

		if (promises.length === 0) return res(result);

		for (let i = 0; i < promises.length; i++) {
			promises[i]
				.then((response) => {
					result[i] = response;
					completed++;
					if (completed === promises.length - 1) return res(result);
				})
				.catch((error) => {
					return rej(error);
				});
		}
	});
}
function promiseAllSettled(promises: Array<Promise<unknown>>) {
	return new Promise(async (res, rej) => {
		const result: unknown[] = [];
		let completed = 0;
		if (promises.length === 0) return res(result);
		for (let i = 0; i < promises.length; i++) {
			promises[i]
				.then((response) => {
					result[i] = response;
				})
				.catch((error) => {
					result[i] = error;
				})
				.finally(() => {
					completed++;
					if (completed === promises.length - 1) return res(result);
				});
		}
	});
}
function promiseRace(promises: Array<Promise<unknown>>) {
	return new Promise(async (res, rej) => {
		for (let i = 0; i < promises.length; i++) {
			promises[i]
				.then((response) => {
					res(response);
				})
				.catch((error) => {
					rej(error);
				});
		}
	});
}
function promiseAny(promises: Array<Promise<unknown>>) {
	return new Promise(async (res, rej) => {
		const result: any[] = [];
		let rejectedCount = 0;
		if (promises.length === 0) {
			return rej(new AggregateError([], "All promises were rejected"));
		}
		for (let i = 0; i < promises.length; i++) {
			promises[i]
				.then((response) => {
					res(response);
				})
				.catch((error) => {
					result[i] = error;
					rejectedCount++;
					if (rejectedCount === promises.length) {
						rej(new AggregateError(result, "All promises were rejected"));
					}
				});
		}
	});
}

function debounceHandle(fn: Function, delay: number) {
	let timer: number;
	return function inner(...args: unknown[]) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			// @ts-ignore
			return fn.apply(this, args);
		}, delay);
	};
}

function throttleHandle(fn: Function, delay: number) {
	let last = 0;
	return function inner(...args: unknown[]) {
		const now = Date.now();
		if (now - last < delay) return;
		last = now;
		// @ts-ignore
		return fn.apply(this, args);
	};
}

function deepClonne<T>(data: T, seen = new WeakMap<any, any>()): T {
	// number, boolean, string, symbols, null, undefined
	if (!["function", "object"].includes(typeof data) || data === null) return data;

	if (seen.has(data)) return seen.get(data);
	// function
	// @ts-ignore
	if (typeof data === "function") return data.bind(this, []);
	// date
	// @ts-ignore
	if (data instanceof Date) return new Date(data.getTime());
	// array
	if (Array.isArray(data)) {
		const res = [] as any;
		seen.set(data, res);
		for (let i = 0; i < data.length; i++) {
			res.push(deepClonne(data[i]));
		}
		return res;
	}
	//object
	const res = {} as any;
	seen.set(data, res);
	for (const key in data) {
		res[key] = deepClonne(data[key]);
	}
	return res;
}
const data2 = {
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
function findAllValuesOrObjectsByPartialKeyPath(data: any, path: string) {
	const res: any = [];
	const splitPath = path.split(".");
	function loop(newData: any, rank: number) {
		const isLast = rank === splitPath.length - 1;
		const k = splitPath[rank];
		for (const key in newData) {
			const value = newData[key];
			if (!value) continue;
			if (key === k) {
				if (isLast) {
					res.push(value);
					continue;
				}
				rank++;
			}
			if (typeof value === "object") loop(value, rank);
		}
	}
	loop(data, 0);
	return res;
}

// ✅ **Example Queries**
// console.log(findAllValuesOrObjectsByPartialKeyPath(data2, "a.b.c.d")); // Output: [4]
// console.log(findAllValuesOrObjectsByPartialKeyPath(data2, "b.c")); // Output: [{ d: 4 }] (Returns object)
// console.log(findAllValuesOrObjectsByPartialKeyPath(dataz, "d")); // Output: [4, 14, 10] (All `d` values)
// console.log(findAllValuesOrObjectsByPartialKeyPath(dataz, "x.a.b.c")); // Output: [] (Not found)

function createResilientAPI2(apiFunction: Function, maxFailures: number, resetTimeout: number) {
	return async (...args: any[]) => {
		let attempted = false;
		let i = 0;
		while (i < maxFailures) {
			try {
				const res = await apiFunction(...args);
				return res;
			} catch (error) {
				// @ts-ignore
				if (attempted) throw new Error(error?.message || "Unknown error");
			} finally {
				i++;
			}
			if (i >= maxFailures) {
				await new Promise((res) => setTimeout(res, maxFailures));
				attempted = true;
				i = maxFailures - 2;
			}
		}
	};
}

async function unreliableAPI2() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() < 0 ? resolve("✅ API Response!") : reject("❌ API Failure!");
		}, 500);
	});
}

// Wrap the API with resilience
const resilientAPI2 = createResilientAPI2(unreliableAPI2, 3, 5000);

async function testAPI() {
	for (let i = 0; i < 1; i++) {
		try {
			const response = await resilientAPI2();
			console.log(`${i}: 🟢 Success: ${response}`);
		} catch (error) {
			console.log(`${i}: 🔴 Failure: ${error}`);
		}
		// Sleep for 1000 millisecond before next call
		await new Promise((resolve, reject) => setTimeout(resolve, 1000));
	}
}

// Run test
// testAPI();

const SUITS = ["diamond", "spade", "heart", "club"];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
const CARDS_TO_DRAW = 5;

const totalCards = SUITS.flatMap((suit) => VALUES.map((value) => `${value}-${suit}`));

function drawRandom(cards: string[]) {
	const res = new Set<string>();
	while (res.size < CARDS_TO_DRAW) {
		const randomIndex = Math.floor(Math.random() * cards.length);
		res.add(cards[randomIndex]);
		cards.splice(randomIndex, 1);
	}
	return Array.from(res);
}
console.log(drawRandom(totalCards));
console.log(drawRandom(totalCards));
console.log(drawRandom(totalCards));
console.log(drawRandom(totalCards));
console.log(totalCards.length);
console.log(drawRandom(totalCards));
console.log(drawRandom(totalCards));
console.log(drawRandom(totalCards));
console.log(totalCards.length);
