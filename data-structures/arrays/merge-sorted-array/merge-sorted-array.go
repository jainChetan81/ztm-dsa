package main

import "fmt"

// given two sorted arrays, create a function that merges these two arrays and returns a sorted array

func main() {
	arr1 := []int{0, 3, 4, 65}
	arr2 := []int{4, 6, 30, 64, 66}
	fmt.Println(mergeSortedArrayBruteForce(arr1, arr2))
}

func mergeSortedArrayBruteForce(arr1, arr2 []int) []int {
	if len(arr1) == 0 {
		return arr2
	}
	if len(arr2) == 0 {
		return arr1
	}
	mergedArray := make([]int, 0)
	i := 0
	j := 0
	for i < len(arr1) && j < len(arr2) {
		if arr1[i] < arr2[j] {
			mergedArray = append(mergedArray, arr1[i])
			i++
		} else {
			mergedArray = append(mergedArray, arr2[j])
			j++
		}
	}
	for i < len(arr1) {
		mergedArray = append(mergedArray, arr1[i])
		i++
	}
	for j < len(arr2) {
		mergedArray = append(mergedArray, arr2[j])
		j++
	}
	return mergedArray
}
