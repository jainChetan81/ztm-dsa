// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

//     1 <= nums.length <= 105
//     -231 <= nums[i] <= 231 - 1
//     0 <= k <= 105

// Follow up:

//     Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
//     Could you do it in-place with O(1) extra space?

package main

import "fmt"

func main() {
	arr1 := []int{1, 2, 3, 4, 5, 6, 7}
	k1 := 3
	arr2 := []int{-1, -100, 3, 99}
	k2 := 2
	// rotateArrayBruteForce(arr1, k1)
	// rotateArrayBruteForce(arr2, k2)
	fmt.Println([]int{5, 6, 7, 1, 2, 3, 4}, rotateArray(arr1, k1))
	fmt.Println([]int{3, 99, -1, -100}, rotateArray(arr2, k2))
}

func rotateArrayBruteForce(nums []int, k int) []int {
	for i := 0; i < k; i++ {
		for j := 0; j < len(nums); j++ {
			nums[j], nums[len(nums)-1] = nums[len(nums)-1], nums[j]
		}
	}
	return nums

}

func rotateArray(nums []int, k int) []int {
	realNums := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		j := i + k
		if j > len(nums)-1 {
			j = j - len(nums)
		}
		realNums[j] = nums[i]
	}
	return realNums
}
