// You are given two strings s and t. In one step, you can append any character to either s or t.
// Return the minimum number of steps to make s and t anagrams of each other.
// An anagram of a string is a string that contains the same characters with a different (or the same) ordering.

// Example 1:

// Input: s = "leetcode", t = "coats"
// Output: 7
// Explanation:
// - In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
// - In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
// "leetcodeas" and "coatsleede" are now anagrams of each other.
// We used a total of 2 + 5 = 7 steps.
// It can be shown that there is no way to make them anagrams of each other with less than 7 steps.

// Example 2:

// Input: s = "night", t = "thing"
// Output: 0
// Explanation: The given strings are already anagrams of each other. Thus, we do not need any further steps.
// Constraints:

//     1 <= s.length, t.length <= 2 * 105
//     s and t consist of lowercase English letters.

function minSteps(s: string, t: string): number {
	if (!s || !t || s.length !== t.length) return 0;
	let anagramOfT = "";
	const mapS = new Map<string, number>();
	const mapT = new Map<string, number>();
	for (let i = 0; i < t.length; i++) {
		anagramOfT += t[t.length - 1 - i];
		const value = mapT.get(t[i]) ?? 0;
		mapT.set(t[i], value + 1);
		const value2 = mapS.get(s[i]) ?? 0;
		mapS.set(s[i], value2 + 1);
	}
	if (anagramOfT === s) return 0;
	let result = 0;
	return result;
}

// example 1
console.log(minSteps("leetcode", "coats"));
// Output: 7
// example 2
console.log(minSteps("night", "thing"));
// Output: 0
