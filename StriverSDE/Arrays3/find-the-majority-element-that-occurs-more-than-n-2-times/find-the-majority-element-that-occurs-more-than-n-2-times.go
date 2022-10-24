// Find the Majority Element that occurs more than N/2 times
// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.
// Example 1:
// Input Format: N = 3, nums[] = {3,2,3}
// Result: 3
// Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution.
// Example 2:
// Input Format:  N = 7, nums[] = {2,2,1,1,1,2,2}
// Result: 2
// Explanation: After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.
// Example 3:
// Input Format:  N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}
// Result: 4

package main

import "fmt"

func main() {

	fmt.Println(majorityElement([]int{3, 2, 3}))
	fmt.Println(majorityElement([]int{2, 2, 1, 1, 1, 2, 2}))
	fmt.Println(majorityElement([]int{4, 4, 2, 4, 3, 4, 4, 3, 2, 4}))
	fmt.Println(majorityElement([]int{3, 3, 4}))
	fmt.Println(majorityElement([]int{6, 5, 5}))
	fmt.Println(majorityElement([]int{1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6, 2, 2}))

}

func majorityElement(nums []int) int {
	count, candidate := 0, -1
	for i := 0; i < len(nums); i++ {
		if count == 0 {
			candidate = nums[i]
		}
		if candidate == nums[i] {
			count++
		} else {
			count--
		}
	}
	return candidate

}
