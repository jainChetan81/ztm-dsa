// Count Reverse Pairs
// Problem Statement: Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].
// Examples:
// Example 1:
// Input: N = 5, array[] = {1,3,2,3,1)
// Output: 2
// Explanation: The pairs are (3, 1) and (3, 1) as from both the pairs the condition arr[i] > 2*arr[j] is satisfied.
// Example 2:
// Input: N = 4, array[] = {3,2,1,4}
// Output: 1
// Explanation: There is only 1 pair  ( 3 , 1 ) that satisfy the condition arr[i] > 2*arr[j]

// Time Complexity: O(nlogn)
// Space Complexity: O(n)

package main

import "fmt"

func main() {
	arr := []int{1, 3, 2, 3, 1}
	arr2 := []int{3, 2, 1, 4}
	fmt.Println("Input: ", arr)
	fmt.Println("Output: ", countReversePairs(arr))
	fmt.Println("Input: ", arr2)
	fmt.Println("Output: ", countReversePairs(arr2))
	fmt.Println("Output3: ", countReversePairs([]int{2, 4, 3, 5, 1}))

}

func countReversePairs(arr []int) int {
	total := 0
	for i := 1; i < len(arr); i++ {
		for j := i - 1; j >= 0; j-- {
			// fmt.Println("i: ", i, "j: ", j, "arr[j]: ", arr[j])
			// e j<i and arr[j]>2*arr[i].
			if arr[j] > arr[i]*2 {
				// fmt.Println("arr[j]*2 < arr[i]", arr[j]*2, arr[i], arr[j]*2 < arr[i])
				total++
			}
		}
	}
	return total
}
