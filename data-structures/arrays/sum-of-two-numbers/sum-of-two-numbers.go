// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because numbers[0] + numbers[1] == 9, we return [0, 1].

// Example 2:

// Input: numbers = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: numbers = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= numbers.length <= 104
// -109 <= numbers[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
package main

func main() {
	arr1 := []int{2, 7, 11, 15}
	twoSum(arr1, 9)
}
func twoSum(nums []int, target int) []int {
	map1 := make(map[int]bool)
	for _, v := range nums {
		if map1[target-v] {
			return []int{v, target - v}
		}

	}
	return []int{1, 2}
}
