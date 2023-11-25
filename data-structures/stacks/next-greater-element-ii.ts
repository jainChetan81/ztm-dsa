// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.
// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

// Example 1:
// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number.
// The second 1's next greater number needs to search circularly, which is also 2.

// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]
function nextGreaterElements(nums: number[]): number[] {
	const stack: number[] = [];
	const result = [];
	for (let i = 2 * nums.length - 1; i >= 0; i--) {
		const value = nums[i % nums.length];
		while (stack.length && stack[stack.length - 1] <= value) {
			stack.pop();
		}
		if (i < nums.length) {
			if (stack.length === 0) {
				result.unshift(-1);
			} else {
				const top = stack[stack.length - 1];
				result.unshift(top);
			}
		}
		stack.push(value);
	}
	return result;
}
// // example 1
// console.log(nextGreaterElements([1, 2, 1])); // [2,-1,2]
// // example 2
// console.log(nextGreaterElements([1, 2, 3, 4, 3])); // [2,3,4,-1,4]
console.log(nextGreaterElements([1, 5, 3, 6, 8])); // [5,6,6,8,-1]
