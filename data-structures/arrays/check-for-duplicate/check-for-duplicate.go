// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

//     1 <= nums.length <= 105
//     -109 <= nums[i] <= 109

package main

func main() {
	arr1 := []int{1, 2, 3, 1}
	arr2 := []int{1, 2, 3, 4}
	arr3 := []int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2}
	println(containsDuplicate(arr1))
	println(containsDuplicate(arr2))
	println(containsDuplicate(arr3))
}

func containsDuplicate(nums []int) bool {
	map1 := make(map[int]int)
	for _, v := range nums {
		map1[v]++
		if map1[v] > 1 {
			return true
		}
	}
	return false

}
