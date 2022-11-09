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
	"sort"
	"strings"
)

func main() {
	fmt.Println(groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"}))
	fmt.Println(groupAnagrams([]string{""}))
	fmt.Println(groupAnagrams([]string{"a"}))
}

func groupAnagrams(strs []string) [][]string {
	result := make([][]string, 0)
	return result
}

func compare(wordFreq map[string]int, secondWordFreq map[string]int) bool {
	if len(wordFreq) != len(secondWordFreq) {
		return false
	}
	for k, v := range wordFreq {
		if secondWordFreq[k] != v {
			return false
		}
	}
	return true
}

func sortString(str string) string {
	strArr := strings.Split(str, "")
	sort.Strings(strArr)
	return strings.Join(strArr, "")
}
