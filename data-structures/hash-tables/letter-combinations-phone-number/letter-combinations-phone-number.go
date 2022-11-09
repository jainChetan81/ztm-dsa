// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:
// Input: digits = ""
// Output: []
// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

package main

import "fmt"

func main() {
	fmt.Println(letterCombinations("23"))
	fmt.Println(letterCombinations(""))
	fmt.Println(letterCombinations("2"))
}

func letterCombinations(digits string) []string {
	if len(digits) == 0 {
		return []string{}
	}
	map1 := map[string][]string{
		"2": {"a", "b", "c"},
		"3": {"d", "e", "f"},
		"4": {"g", "h", "i"},
		"5": {"j", "k", "l"},
		"6": {"m", "n", "o"},
		"7": {"p", "q", "r", "s"},
		"8": {"t", "u", "v"},
		"9": {"w", "x", "y", "z"},
	}
	result := make([]string, 0)
	for i := 0; i < len(digits); i++ {
		if i == 0 {
			result = map1[string(digits[i])]
		} else {
			result = combine(result, map1[string(digits[i])])
		}

	}
	return result

}

func combine(result []string, s []string) []string {
	temp := make([]string, 0)
	for i := 0; i < len(result); i++ {
		for j := 0; j < len(s); j++ {
			temp = append(temp, result[i]+s[j])
		}
	}
	return temp
}
