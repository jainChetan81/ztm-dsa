package main

import "fmt"

func main() {
	arr1 := []int{1, 2, 3, 9}
	arr2 := []int{1, 2, 4, 4}
	fmt.Println(hasPairWithSum(arr1, 8))
	fmt.Println(hasPairWithSum(arr2, 8))
	fmt.Println(optimizedHasPairWithSum(arr1, 8))
	fmt.Println(optimizedHasPairWithSum(arr2, 8))
}
func hasPairWithSum(arr []int, sum int) bool {
	if len(arr) == 0 {
		return false
	}
	for i := 0; i < len(arr); i++ {
		for j := i; j < len(arr); j++ {
			if arr[i]+arr[j] == sum {
				return true
			}
		}
	}
	return false
}

func optimizedHasPairWithSum(arr []int, sum int) bool {
	if len(arr) == 0 {
		return false
	}
	set := make(map[int]bool)
	for _, v := range arr {
		if set[sum-v] {
			return true
		}
		set[v] = true
	}

	return false
}
