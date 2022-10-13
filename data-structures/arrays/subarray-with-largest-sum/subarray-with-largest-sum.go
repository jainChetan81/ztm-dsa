// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:
// Input: nums = [1]
// Output: 1
// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Constraints:
//
//	1 <= nums.length <= 105
//	-104 <= nums[i] <= 104
//
// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
package main

func main() {
	arr1 := []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}
	// brute force
	println(maxSubArrayBruteForce(arr1))
	println(maxSubArray(arr1))
}

func maxSubArrayBruteForce(nums []int) int {
	max := nums[0]
	for i := 0; i < len(nums); i++ {
		sum := 0
		for j := i; j < len(nums); j++ {
			sum += nums[j]
			if sum > max {
				max = sum
			}

		}
	}
	return max
}

func maxSubArray(nums []int) int {
	max1, max2 := nums[0], nums[0]
	for i := 1; i < len(nums); i++ {
		if nums[i] > max1+nums[i] {
			max1 = nums[i]
		} else {
			max1 = max1 + nums[i]
		}
		if max1 > max2 {
			max2 = max1
		}
	}
	return max2
}
