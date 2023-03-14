// You are given a 0-indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

// Example 1:
// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.

// Example 2:
// Input: nums = [1,2,5,2,3], target = 3
// Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.

// Example 3:
// Input: nums = [1,2,5,2,3], target = 5
// Output: [4]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 5 is 4.

function targetIndices(nums: number[], target: number): number[] {
	nums.sort((a, b) => a - b);
	// console.log(nums);
	function binarySearch(left = 0, right = nums.length - 1): number[] {
		const mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) {
			const result = new Set([mid]);
			let [leftMost, rightMost] = [mid, mid];
			while (nums[leftMost] === target) {
				result.add(leftMost);
				leftMost--;
			}
			while (nums[rightMost] === target) {
				result.add(rightMost);
				rightMost++;
			}
			// console.log(result);
			return Array.from(result).sort((a, b) => a - b);
		}
		if (left > right) return [];
		if (nums[mid] > target) return binarySearch(left, mid - 1);
		if (nums[mid] < target) return binarySearch(mid + 1, right);
		return [];
	}
	return binarySearch();
}

console.log(targetIndices([1, 2, 5, 2, 3], 2)); // [1,2]
console.log(targetIndices([1, 2, 5, 2, 3], 3)); // [3]
console.log(targetIndices([1, 2, 5, 2, 3], 5)); // [4]
console.log(targetIndices([1, 2, 5, 2, 3], 4)); // []
