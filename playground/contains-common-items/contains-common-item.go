package main

import "fmt"

func main() {
	a := []string{"a", "b", "c", "x", "i"}
	b := []string{"z", "y", "i"}
	fmt.Println(bruteForceCheckForCommon(a, b))
	fmt.Println(optimizedCheckForCommon(a, b))
}

func bruteForceCheckForCommon(a, b []string) bool {
	if len(a) == 0 || len(b) == 0 {
		return false
	}
	for _, v := range a {
		for _, v1 := range b {
			if string(v) == string(v1) {
				fmt.Println("correct one: ", string(v), string(v1))
				return true
			}
			fmt.Println(string(v), string(v1))
		}
	}
	return false
}
func optimizedCheckForCommon(a, b []string) bool {
	if len(a) == 0 || len(b) == 0 {
		return false
	}
	setA := make(map[string]bool)
	for _, v := range a {
		setA[string(v)] = true
	}
	for _, v := range b {
		if setA[string(v)] {
			return true
		}
	}

	return false
}
