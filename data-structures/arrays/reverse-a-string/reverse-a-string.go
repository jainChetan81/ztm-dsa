package main

import "fmt"

const reverseThisString = "Hello World"

// reverse a string

func main() {
	fmt.Println(len(reverseThisString), " ", reverseAStringBruteForce(reverseThisString))
	fmt.Println(len(reverseThisString), " ", reverseAStringOptimized(reverseThisString))
}

// My Method by defining looping through the string, and putting in a different string
func reverseAStringBruteForce(s string) string {
	if len(s) == 0 {
		return ""
	}
	str2 := ""

	for i := 0; i < len(s); i++ {
		str2 += string(s[len(s)-1-i])
	}
	return str2
}
func reverseAStringOptimized(s string) string {
	if len(s) == 0 {
		return ""
	}
	buf := []rune(s)
	var (
		i int = 0
		j int = len(buf) - 1
	)
	for i < j {
		a := buf[i]
		buf[i] = buf[j]
		buf[j] = a
		i++
		j--
	}
	return string(buf)
}
