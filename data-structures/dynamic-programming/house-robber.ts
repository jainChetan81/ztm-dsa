// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

function rob(nums: number[]): number {
	if (nums.length === 0) return 0;
	const stack: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		if (i === 0) stack.push(nums[i]);
		if (i === 1) stack.push(Math.max(nums[1], nums[0]));
		if (i > 1) stack.push(Math.max(stack[i - 1], stack[i - 2] + nums[i]));
	}
	return stack[stack.length - 1];
}
console.log(rob([1, 2, 3, 1])); //4
console.log(rob([2, 7, 9, 3, 1])); //12
console.log(rob([2, 1, 1, 2])); //4
