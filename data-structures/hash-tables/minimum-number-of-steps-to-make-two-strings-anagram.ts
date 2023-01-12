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
	// only mapT can be manipulated
	mapT.forEach((value, key) => {
		// here if the letters are a and b and we are calculating the difference in their occurrences
		// here the number will be wither 0 or >0 or less than 0
		// if it is 0 then we don't need to do anything
		const marginForError = value - (mapS.get(key) ?? 0);
		if (marginForError > 0) {
			// that means T has freq of a char more than S
			// which means remove the extra chars from T
			console.log("marginForError:", marginForError, "for key:", key, "value:", value);
			mapT.set(key, value - marginForError);
			result += marginForError;
		}
		if (marginForError < 0) {
			// that means T has freq of a char less than S
			// which means add the extra chars to T
			console.log("marginForError:", marginForError, "for key:", key, "value:", value);
			mapT.set(key, value - marginForError);
		}
	});
	console.log("mapT", mapT);
	console.log("mapS", mapS);
	return result;
}

// example 1
console.log(minSteps("bab", "aba"));
//                    s   ,   t
// Output: 1

console.log(minSteps("leetcode", "practice"));
// // Output 5
console.log(minSteps("anagram", "mangaar"));
// Output 0
