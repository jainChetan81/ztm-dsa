// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.
// Return the minimum number of steps to make t an anagram of s.
// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.
// Example 1:
// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
// Example 2:
// Input: s = "leetcode", t = "practice"
// Output: 5
// Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
// Example 3:
// Input: s = "anagram", t = "mangaar"
// Output: 0
// Explanation: "anagram" and "mangaar" are anagrams.
// Constraints:
//     1 <= s.length <= 5 * 104
//     s.length == t.length
//     s and t consist of lowercase English letters only.
function minSteps(s: string, t: string): number {
	if (!s || !t || s.length !== t.length) return 0;
	// change mapT so it can be an anagram of s
	const mapS = new Map<string, number>();
	const mapT = new Map<string, number>();
	for (let i = 0; i < t.length; i++) {
		const value = mapT.get(t[i]) ?? 0;
		mapT.set(t[i], value + 1);
		const value2 = mapS.get(s[i]) ?? 0;
		mapS.set(s[i], value2 + 1);
	}
	if (checkForAnagrams(mapS, mapT)) return 0;
	let result = 0;
	// console.log("mapT", mapT);
	// console.log("mapS", mapS);
	// so here we loop over mapT to replace it, now we need to check for any value and then act accordingly to it
	// if valueT and valueS are equal, do nothing
	// if valueT > valueS, decrease the count of valueT and add it to the result
	mapT.forEach((valueT, keyT) => {
		const valueS = mapS.get(keyT) ?? 0;
		console.log(valueT, keyT, valueS);
		const difference = valueT - valueS;
		if (difference === 0) return;
		if (difference > 0) {
			result += difference;
		}
		mapT.set(keyT, valueS);
	});
	return result;
}

const checkForAnagrams = (s: Map<string, number>, t: Map<string, number>): boolean => {
	if (!s || !t || s.size !== t.size) return false;
	for (const [key, value] of s) {
		if (t.get(key) !== value) return false;
	}
	return true;
};
// example 1
console.log(minSteps("bab", "aba"));
//                    s   ,   t
// Output: 1

console.log(minSteps("leetcode", "practice"));
// // // Output 5
console.log(minSteps("anagram", "mangaar"));
// Output 0
