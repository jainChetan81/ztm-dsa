// Given an array of integers arr.

// We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).

// Let's define a and b as follows:

//     a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
//     b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]

// Note that ^ denotes the bitwise-xor operation.
// Return the number of triplets (i, j and k) Where a == b.

// Example 1:
// Input: arr = [2,3,1,6,7]
// Output: 4
// Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)
// Example 2:
// Input: arr = [1,1,1,1,1]
// Output: 10
// Constraints:

//     1 <= arr.length <= 300
//     1 <= arr[i] <= 108

function countTriplets(arr: number[]): number {
	let totalTriplets = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			let a = 0;
			let temp = i;
			while (temp < j) {
				a = a ^ arr[temp];
				temp++;
			}
			for (let k = j; k < arr.length; k++) {
				let b = 0;
				temp = j;
				while (temp <= k) {
					b = b ^ arr[temp];
					temp++;
				}
				if (a === b) totalTriplets++;
			}
		}
	}
	return totalTriplets;
}

// Example 1:
// Input: arr = [2,3,1,6,7]
// Output: 4
console.log(countTriplets([2, 3, 1, 6, 7]));

// Example 2:
// Input: arr = [1,1,1,1,1]
// Output: 10
console.log(countTriplets([1, 1, 1, 1, 1]));
