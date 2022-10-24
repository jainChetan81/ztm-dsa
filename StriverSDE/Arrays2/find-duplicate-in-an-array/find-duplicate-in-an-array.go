// Find the duplicate in an array of N+1 integers
// Problem Statement: Given an array of N + 1 size, where each element is between 1 and N. Assuming there is only one duplicate number, your task is to find the duplicate number.
// Examples:
// Example 1:
// Input: arr=[1,3,4,2,2]
// Output: 2
// Explanation: Since 2 is the duplicate number the answer will be 2.
// Example 2:
// Input: [3,1,3,4,2]
// Output:3
// Explanation: Since 3 is the duplicate number the answer will be 3.

package main

import "fmt"

func main() {
	arr := []int{1, 3, 4, 2, 2}
	arr2 := []int{3, 1, 3, 4, 2}
	fmt.Println(findDuplicate(arr))
	fmt.Println(findDuplicate(arr2))
}

func findDuplicate(nums []int) int {
	map1 := make(map[int]int)
	for _, v := range nums {
		map1[v]++
		if map1[v] > 1 {
			return v
		}
	}
	return -1
}
