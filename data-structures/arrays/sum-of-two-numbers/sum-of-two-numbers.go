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

import "fmt"

func main() {
	arr1 := []int{3, 4, 6, 15}
	fmt.Println(twoSum(arr1, 9))
}
func twoSum(nums []int, target int) []int {
	map1 := make(map[int]int)
	for i, v := range nums {
		// Since we are storing the number nd their index in the map respectively,
		// this line checks if the difference of the target and the current number is present in the map
		// j represents the the index of the number(number being target - currentNumber) that is present in the map
		// ok(boolean) means that the value is present and proves that the difference of the target and the current number is present in the map
		if j, ok := map1[target-v]; ok {
			return []int{j, i}
		}
		map1[v] = i

	}
	return []int{0, 0}
}
