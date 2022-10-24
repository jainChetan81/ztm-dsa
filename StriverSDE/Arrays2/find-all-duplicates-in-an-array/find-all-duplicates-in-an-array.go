// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.
// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:
// Input: nums = [1,1,2]
// Output: [1]
// Example 3:
// Input: nums = [1]
// Output: []

package main

import "fmt"

func main() {

	nums := []int{4, 3, 2, 7, 8, 2, 3, 1}
	nums2 := []int{1, 1, 2}
	nums3 := []int{1}
	fmt.Println(findDuplicates(nums))
	fmt.Println(findDuplicates(nums2))
	fmt.Println(findDuplicates(nums3))
}

func findDuplicates(nums []int) []int {
	map1 := make(map[int]int)
	duplicate := []int{}
	for _, v := range nums {
		map1[v]++
		if map1[v] > 1 {
			duplicate = append(duplicate, v)
		}
	}
	return duplicate
}
