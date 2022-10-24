// Find the repeating and missing numbers
// Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.
// Example 1:
// Input Format:  array[] = {3,1,2,5,3}
// Result: {3,4)
// Explanation: A = 3 , B = 4
// Since 3 is appearing twice and 4 is missing
// Example 2:
// Input Format: array[] = {3,1,2,5,4,6,7,5}
// Result: {5,8)
// Explanation: A = 5 , B = 8
// Since 5 is appearing twice and 8 is missing

package main

import "fmt"

func main() {
	arr := []int{3, 1, 2, 5, 3}
	arr2 := []int{3, 1, 2, 5, 4, 6, 7, 5}
	fmt.Println(findRepeatingAndMissing(arr))
	fmt.Println(findRepeatingAndMissing(arr2))
}

func findRepeatingAndMissing(arr []int) []int {
	repeating := -1
	missing := -1
	map1 := make(map[int]int)
	for i := 0; i < len(arr); i++ {
		map1[arr[i]]++
		if map1[arr[i]] > 1 {
			repeating = arr[i]
		}
	}
	for i := 0; i < len(arr); i++ {
		_, ok := map1[i+1]
		if !ok {
			missing = i + 1
		}

	}
	return []int{repeating, missing}
}
