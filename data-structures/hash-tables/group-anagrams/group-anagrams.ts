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

const str1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const str2 = [""];
const str3 = ["a"];

const groupAnagrams = function (strs: string[]): string[][] {
	const groups: Record<string, string[]> = {};
	for (const key of strs) {
		console.log(key);
		const currentSortedWord = key.split("").sort().join("");
		if (groups[currentSortedWord]) {
			groups[currentSortedWord].push(key);
		} else {
			groups[currentSortedWord] = [key];
		}
	}
	return Object.values(groups);
};

console.log(groupAnagrams(str1));
console.log(groupAnagrams(str2));
console.log(groupAnagrams(str3));
