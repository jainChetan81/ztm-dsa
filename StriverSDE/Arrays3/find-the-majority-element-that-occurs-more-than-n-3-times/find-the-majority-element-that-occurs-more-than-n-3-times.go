// Majority Elements(>N/3 times) | Find the elements that appears more than N/3 times in the array
// Problem Statement: Given an array of N integers. Find the elements that appear more than N/3 times in the array. If no such element exists, return an empty vector.
// Example 1:
// Input: N = 5, array[] = {1,2,2,3,2}
// Ouput: 2
// Explanation: Here we can see that the Count(1) = 1, Count(2) = 3 and Count(3) = 1.Therefore, the count of 2 is greater than N/3 times. Hence, 2 is the answer.
// Example 2:
// Input:  N = 6, array[] = {11,33,33,11,33,11}
// Output: 11 33
// Explanation: Here we can see that the Count(11) = 3 and Count(33) = 3. Therefore, the count of both 11 and 33 is greater than N/3 times. Hence, 11 and 33 is the answer.

package main

import "fmt"

func main() {
	fmt.Println(majorityElement([]int{1, 2, 2, 3, 2}))
	fmt.Println(majorityElement([]int{11, 33, 33, 11, 33, 11}))
	fmt.Println(majorityElement([]int{1, 2, 3, 4, 5}))
	fmt.Println(majorityElement([]int{1, 1, 1, 3, 3, 2, 2, 2}))
	fmt.Println(majorityElement([]int{2, 2, 1, 3}))
}

func majorityElement(nums []int) []int {
	count1, count2, candidate, nextCandidate := 0, 0, -1, -1
	for i := 0; i < len(nums); i++ {
		if candidate == nums[i] {
			count1++
		} else if nextCandidate == nums[i] {
			count2++
		} else if count1 == 0 {
			candidate = nums[i]
			count1++
		} else if count2 == 0 {
			nextCandidate = nums[i]
			count2++
		} else {
			count1--
			count2--
		}
	}
	arr := make([]int, 0)
	if candidate != -1 && count1 > len(nums)/3 {
		arr = append(arr, candidate)
	}
	if nextCandidate != -1 && count2 > len(nums)/3 {
		arr = append(arr, nextCandidate)
	}
	return arr

}
