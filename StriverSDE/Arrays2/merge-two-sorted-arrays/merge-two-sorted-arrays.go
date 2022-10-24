// roblem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.
// Examples:
// Input:
// n = 4, arr1[] = [1 4 8 10]
// m = 5, arr2[] = [2 3 9]
// Output:
// arr1[] = [1 2 3 4]
// arr2[] = [8 9 10]
// Explanation:
// After merging the two non-decreasing arrays, we get, 1,2,3,4,8,9,10.
// Example2:
// Input:
// n = 4, arr1[] = [1 3 5 7]
// m = 5, arr2[] = [0 2 6 8 9]
// Output:
// arr1[] = [0 1 2 3]
// arr2[] = [5 6 7 8 9]
// Explanation:
// After merging the two non-decreasing arrays, we get, 0 1 2 3 5 6 7 8 9.

// Time Complexity: O(n+m)
// Space Complexity: O(1)

package main

import "fmt"

func main() {
	arr1 := []int{1, 4, 8, 10}
	arr2 := []int{2, 3, 9}
	// fmt.Println(mergeBruteForce(arr1, arr2))
	// fmt.Println(merge(arr1, len(arr1), arr2, len(arr2)))

	arr1 = []int{1, 3, 5, 7}
	arr2 = []int{0, 2, 6, 8, 9}
	// fmt.Println(mergeBruteForce(arr1, arr2))
	// fmt.Println(merge(arr1, len(arr1), arr2, len(arr2)))

	arr1 = []int{4, 0, 0, 0, 0, 0}
	arr2 = []int{1, 2, 3, 5, 6}
	fmt.Println(mergeBruteForce(arr1, arr2))
	fmt.Println(merge(arr1, len(arr1), arr2, len(arr2)))

}

func mergeBruteForce(arr1, arr2 []int) (merged []int) {
	if len(arr1) == 0 {
		return arr2
	}
	if len(arr2) == 0 {
		return arr1
	}
	a, b := 0, 0
	mergedArr := make([]int, len(arr1)+len(arr2))
	for i := 0; i < len(arr2)+len(arr1); i++ {
		if a >= len(arr1) {
			mergedArr[i] = arr2[b]
			b++

		} else if b >= len(arr2) {
			mergedArr[i] = arr1[a]
			a++
		} else if arr1[a] < arr2[b] {
			mergedArr[i] = arr1[a]
			a++
		} else {
			mergedArr[i] = arr2[b]
			b++
		}

	}

	return mergedArr

}
func
 merge(nums1 []int, m int, nums2 []int, n int) []int {
			if len(nums1) == 0 {
				return nums2
			}
			if len(nums2) == 0 {
				return nums1
			}
			j := 0
			for i := 0; i < len(nums1); i++ {
				if nums1[i] > nums2[j] {
					nums1[i], nums2[j] = nums2[j], nums1[i]
					j++
				}
			}
			nums1 = append(nums1, nums2...)
			return nums1
}
