package main

import "fmt"

func main() {
	arr1 := []int{2, 5, 1, 2, 3, 5, 1, 2, 4}
	arr2 := []int{2, 1, 1, 2, 3, 5, 1, 2, 4}
	fmt.Println(firstRecurringChar(arr1))
	fmt.Println(firstRecurringChar(arr2))
}

func firstRecurringChar(num []int) int {
	m1 := make(map[int]int)
	for i := 0; i < len(num); i++ {
		if m1[num[i]] >= 1 {
			return num[i]
		}
		m1[num[i]]++
	}
	return -1
}
