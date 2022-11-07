// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

package main

import (
	"fmt"
)

func main() {
	string1 := []string{"eat", "tea", "tan", "ate", "nat", "bat"}
	string2 := []string{""}
	string3 := []string{"a"}
	fmt.Println(groupAnagrams(string1))
	fmt.Println(groupAnagrams(string2))
	fmt.Println(groupAnagrams(string3))
}

func groupAnagrams(str []string) [][]string {
	result := [][]string{}
	for i := 0; i < len(str); i++ {
		currentWord := str[i]
		currentWordHash := make(map[string]int)
		currentRowGroup := []string{}
		for _, char := range currentWord {
			currentWordHash[string(char)]++
		}
		for j := i; j < len(str); j++ {
			secondWordHash := make(map[string]int)
			for _, char := range str[j] {
				secondWordHash[string(char)]++
			}
			if equalHashes(currentWordHash, secondWordHash) {
				currentRowGroup = append(currentRowGroup, str[j])
			}
		}
		result = append(result, currentRowGroup)
	}
	return result
}

func equalHashes(m1 map[string]int, m2 map[string]int) bool {
	if len(m1) != len(m2) {
		return false
	}
	for k, v := range m1 {
		if m2[k] != v {
			return false
		}
	}
	return true
}
