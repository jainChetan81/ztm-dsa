// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.
//     For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

// Example 1:
// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

// Example 2:
// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
function minimumSum(num: number): number {
	if (num < 10) return num;
	const array = num.toString().split("");
	insertionSortNew(array);
	return +array[0] * 10 + +array[2] + +array[1] * 10 + +array[3];
}
function insertionSortNew(array: string[]) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < i; j++) {
			if (+array[j] > +array[i]) {
				[array[j], array[i]] = [array[i], array[j]];
			}
		}
	}
}

console.log(minimumSum(2932));
console.log(minimumSum(4009));
