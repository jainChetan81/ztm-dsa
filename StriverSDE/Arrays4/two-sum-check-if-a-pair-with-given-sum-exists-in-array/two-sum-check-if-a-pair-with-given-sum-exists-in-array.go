// Two Sum : Check if a pair with given sum exists in Array
// Problem Statement: Given an array of integers nums[] and an integer target, return indices of the two numbers such that their sum is equal to the target.
// Note: Assume that there is exactly one solution, and you are not allowed to use the same element twice. Example: If target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9,
// which is the required target, we return
// indexes [0,1]. (0-based indexing)
// Example 2:
// Input Format: nums = [3,2,4,6], target = 6
// Output: [1,2]
// Explanation: Because nums[1] + nums[2] == 6,
// which is the required target, we return
// indexes [1,2].

// Time Complexity: O(n)
// Space Complexity: O(n)

package main

import "fmt"

func main() {
	arr := []int{2, 7, 11, 15}
	fmt.Println("Input: ", arr)
	fmt.Println("Output: ", twoSum(arr, 9))
	fmt.Println("--------------------------")
	arr2 := []int{3, 2, 4, 6}
	fmt.Println("Input: ", arr2)
	fmt.Println("Output: ", twoSum(arr2, 6))
}

func twoSum(nums []int, target int) []int {
	map1 := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		result := target - nums[i]
		map1[result] = i
	}
	for i := 0; i < len(nums); i++ {
		if map1[nums[i]] != 0 {
			return []int{i, map1[nums[i]]}
		}
	}
	// fmt.Println(map1)
	return []int{-1, -1}

}
