// a js fn that takes n nuber of list async fns
// how many fn of which we want to run parallel, n at any time
// return all the promises awaited
const firstPromise = async () => {
	return new Promise((res) => {
		console.log("started first");

		setTimeout(() => {
			console.log("first");
			return res("first");
		}, 1000);
	});
};
const secondPromise = async () => {
	return new Promise((res) => {
		console.log("started second");
		setTimeout(() => {
			console.log("second");
			return res("second");
		}, 3000);
	});
};
const third = async () => {
	return new Promise((res) => {
		console.log("started third");
		setTimeout(() => {
			console.log("third");
			return res("third");
		}, 1000);
	});
};
const fourth = async () => {
	return new Promise((res) => {
		console.log("started fourth");
		setTimeout(() => {
			console.log("fourth");
			return res("fourth");
		}, 1000);
	});
};
const fifth = async () => {
	return new Promise((res) => {
		console.log("started fifth");
		setTimeout(() => {
			console.log("fifth");
			return res("fifth");
		}, 500);
	});
};
const promises = [firstPromise, secondPromise, third, fourth, fifth];
async function asyncPromises(arr: (() => Promise<unknown>)[], parallel: number) {
	return new Promise((resolve) => {
		const results = new Array(arr.length);
		const inProgress = new Set<number>(); // Track running promises with their indices
		let nextIndex = 0;

		function processNext() {
			if (nextIndex >= arr.length) return;

			const currentIndex = nextIndex++;
			arr[currentIndex]()
				.then((data) => {
					results[currentIndex] = data;
					inProgress.delete(currentIndex);
					return currentIndex;
				})
				.catch((err) => {
					results[currentIndex] = err;
					inProgress.delete(currentIndex);
					return currentIndex;
				})
				.finally(() => {
					if (nextIndex < arr.length) {
						processNext();
					} else if (inProgress.size === 0) {
						resolve(results);
					}
				});

			inProgress.add(currentIndex);
		}

		// Handle empty array case
		if (arr.length === 0) {
			resolve([]);
			return;
		}

		// Start initial batch of promisesis
		for (let i = 0; i < Math.min(parallel, arr.length); i++) {
			processNext();
		}
	});
}
console.time("start");
// @ts-ignore
console.log(await asyncPromises(promises, 2));
console.timeEnd("start");
