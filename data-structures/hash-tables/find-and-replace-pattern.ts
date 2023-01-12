// Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.
// A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
// Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.
// Example 1:
// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.
// Example 2:
// Input: words = ["a","b","c"], pattern = "a"
// Output: ["a","b","c"]
// Constraints:
//     1 <= pattern.length <= 20
//     1 <= words.length <= 50
//     words[i].length == pattern.length
//     pattern and words[i] are lowercase English letters.

function findAndReplacePattern(words: string[], pattern: string): string[] {
	const patternFromMatch = findPattern(pattern);
	let result: string[] = [];
	for (let i = 0; i < words.length; i++) {
		const patternToMatch = findPattern(words[i]);
		console.log("patternToMatch:", patternToMatch);
		console.log("patternFromMatch:", patternFromMatch);
		if (patternToMatch === patternFromMatch) {
			result.push(words[i]);
		}
	}
	return result;
}
function findPattern(word: string): string {
	let pat_index = 0;
	let a: number[] = [];
	let temp: string[] = [];
	word.split("").forEach((c, index) => {
		temp.includes(c) ? a.push(temp.indexOf(c)) : a.push(pat_index++);
		temp.push(c);
	});
	return JSON.stringify(a);
}
// example 1
// console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"));
// Output: ["mee","aqq"]

// example 2
// console.log(findAndReplacePattern(["a", "b", "c"], "a"));
// Output: ["a", "b", "c"];
// example 3
console.log(findAndReplacePattern(["badc", "abab", "dddd", "dede", "yyxx"], "baba"));
// Output: ["abab","dede"]

// console.log(findPattern("yyxx"));
