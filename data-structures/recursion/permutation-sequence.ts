// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
//     "123"
//     "132"
//     "213"
//     "231"
//     "312"
//     "321"
// Given n and k, return the kth permutation sequence.

// Example 1:
// Input: n = 3, k = 3
// Output: "213"

// Example 2:
// Input: n = 4, k = 9
// Output: "2314"

// Example 3:
// Input: n = 3, k = 1
// Output: "123"
function getPermutation(n: number, k: number): string {
	const arr = Array(n)
		.fill(n)
		.map((_a, i) => i + 1);
	console.log(arr);
	let res = "";
	for (let i = n - 1; i >= 0; --i) {
		let f = 1;
		for (let m = i; m > 0; --m) {
			f *= m;
		}
		let pos = ~~((k - 1) / f);
		k -= pos * f;
		res += arr[pos];
		arr.splice(pos, 1);
	}
	return res;
}

console.log(getPermutation(3, 3));
// console.log(getPermutation(4, 9));
// console.log(getPermutation(3, 1));
