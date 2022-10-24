// Problem Statement: Given an array consisting of only 0s, 1s and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Input: nums = [2,0,1]
// Output: [0,1,2]
// Input: nums = [0]
// Input: nums = [0]

package main

import "fmt"

func main() {
	arr1 := []int{2, 0, 2, 1, 1, 0}
	arr2 := []int{2, 0, 1}
	fmt.Println(sortArray(arr1))
	fmt.Println(sortArray(arr2))
	fmt.Println(sortArray([]int{0}))
	fmt.Println(sortArray([]int{1}))
}

func sortArray(nums []int) []int {
	sortedArray := make([]int, 0)
	map1 := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		map1[nums[i]]++
	}
	if map1[0] > 0 {
		sortedArray = append(sortedArray, 0)
	}
	if map1[1] > 0 {
		sortedArray = append(sortedArray, 1)
	}
	if map1[2] > 0 {
		sortedArray = append(sortedArray, 2)
	}
	return sortedArray
}
