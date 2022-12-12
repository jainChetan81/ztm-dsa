// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

package main

import "fmt"

func main() {
	nums1 := []int{100, 4, 200, 1, 3, 2}
	fmt.Println(longestConsecutive(nums1))
	nums2 := []int{0, 3, 7, 2, 5, 8, 4, 6, 0, 1}
	fmt.Println(longestConsecutive(nums2))
}

func longestConsecutive(nums []int) int {
	maxCount := 0
	map1 := make(map[int]int)
	for _, num := range nums {
		map1[num]++
	}
	for _, num := range nums {
		prev := num - 1
		if _, ok := map1[prev]; !ok {
			count := 1
			for map1[num+1] > 0 {
				count++
				num++
			}
			if count > maxCount {
				maxCount = count
			}
		}
	}
	return maxCount
}
