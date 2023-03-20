// hidden classes and inline caching
// different execution contexts
console.log(this);

const obj = {
	key: 1,
	named() {
		console.log("named", this.key);
		console.log(this);
		console.log(c);
	},
	arrow: () => {
		if (true) {
			const v = 1;
			var c = 1;
		}
		console.log(c);
		console.log("arrow", this);
		console.log(this);
	}
};
// obj.named();
// obj.arrow();
// Given an array of elements of size N, the array is supposed to have elements from 1 to N.
// But one of the elements is missing and one of them is repeating.
// Find the repeating and the missing element.

// constraints: there will be only repeating and missing element

function findMissingAndRepeatedNumber(arr: number[]) {
	let missingNum = -Infinity;
	let repeatingNum = -Infinity;
	const set = new Set();
	for (let i = 0; i < arr.length; i++) {
		if (set.has(arr[i])) {
			repeatingNum = arr[i];
		}
		set.add(arr[i]);
	}
	for (let i = 1; i <= arr.length; i++) {
		if (!set.has(i)) {
			missingNum = i;
			break;
		}
	}
	return { missingNum, repeatingNum };
}

// Ex [2,1,4,4,3]
// Repeating_num = 4
// Missing_num = 5
console.log(findMissingAndRepeatedNumber([2, 1, 4, 4, 3]));
// time complexity: O(n)
