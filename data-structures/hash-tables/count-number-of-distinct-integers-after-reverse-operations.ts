// You are given an array nums consisting of positive integers.
// You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.
// Return the number of distinct integers in the final array.
// Example 1:
// Input: nums = [1,13,10,12,31]
// Output: 6
// Explanation: After including the reverse of each number, the resulting array is [1,13,10,12,31,1,31,1,21,13].
// The reversed integers that were added to the end of the array are underlined. Note that for the integer 10, after reversing it, it becomes 01 which is just 1.
// The number of distinct integers in this array is 6 (The numbers 1, 10, 12, 13, 21, and 31).
// Example 2:
// Input: nums = [2,2,2]
// Output: 1
// Explanation: After including the reverse of each number, the resulting array is [2,2,2,2,2,2].
// The number of distinct integers in this array is 1 (The number 2).
// Constraints:
//     1 <= nums.length <= 105
//     1 <= nums[i] <= 106

function countDistinctIntegers(nums: number[]): number {
	const set = new Set();
	nums.forEach((num) => {
		const reversedNum = +`${num}`.split("").reverse().join("");
		set.add(reversedNum);
		set.add(num);
	});
	return set.size;
}

// example 1
// console.log(countDistinctIntegers([1, 13, 10, 12, 31]));
// Output: 6

// example 2
// console.log(countDistinctIntegers([2, 2, 2]));
// Output: 1

// example 3
console.log(
	countDistinctIntegers([
		89904, 846787, 965070, 396570, 847607, 625317, 851503, 143414, 954838, 837423, 988190, 916423, 771555, 680073,
		575614, 967207, 965688,
	])
);
//Output 34