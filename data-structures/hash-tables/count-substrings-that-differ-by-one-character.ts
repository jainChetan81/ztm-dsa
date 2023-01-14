// Given two strings s and t, find the number of ways you can choose a non-empty substring of s and replace a single character by a different character such that the resulting substring is a substring of t. In other words, find the number of substrings in s that differ from some substring in t by exactly one character.
// For example, the underlined substrings in "computer" and "computation" only differ by the 'e'/'a', so this is a valid way.
// Return the number of substrings that satisfy the condition above.
// A substring is a contiguous sequence of characters within a string.

// Example 1:
// Input: s = "aba", t = "baba"
// Output: 6
// Explanation: The following are the pairs of substrings from s and t that differ by exactly 1 character:
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// The underlined portions are the substrings that are chosen from s and t.

// ​​Example 2:
// Input: s = "ab", t = "bb"
// Output: 3
// Explanation: The following are the pairs of substrings from s and t that differ by 1 character:
// ("ab", "bb")
// ("ab", "bb")
// ("ab", "bb")
// ​​​​The underlined portions are the substrings that are chosen from s and t.

// Constraints:
//     1 <= s.length, t.length <= 100
//     s and t consist of lowercase English letters only.

function countSubstrings(s: string, t: string): number {
	if (!s || !t) return 0;
	// get  hashmaps with length of substring and the set of substring of both strings are stored
	// so when we are looping over any map and checking with others,
	// we know that at most we need to check for at most 1 difference otherwise nothing
	const mapS = new Map<number, Set<string>>();
	const mapT = new Map<number, Set<string>>();
	const subsStringsS = new Set<string>();
	const subsStringsT = new Set<string>();
	for (let i = 0; i < t.length; i++) {
		const set = mapT.get(1) ?? new Set<string>();
		let subs = t[i];
		set.add(subs);
		mapT.set(1, set);
		subsStringsT.add(subs);
		for (let j = i + 1; j < s.length; j++) {
			subs += t[j];
			const setOfCertainLength = mapT.get(subs.length) ?? new Set<string>();
			subsStringsT.add(subs);
			setOfCertainLength.add(subs);
			mapT.set(subs.length, setOfCertainLength);
		}
	}
	for (let i = 0; i < s.length; i++) {
		const set = mapS.get(1) ?? new Set<string>();
		let subs = s[i];
		set.add(subs);
		mapS.set(1, set);
		subsStringsS.add(subs);
		for (let j = i + 1; j < s.length; j++) {
			subs += s[j];
			const setOfCertainLength = mapS.get(subs.length) ?? new Set<string>();
			subsStringsS.add(subs);
			setOfCertainLength.add(subs);
			mapS.set(subs.length, setOfCertainLength);
		}
	}
	console.log("mapS:", mapS);
	console.log("mapT:", mapT);
	// loop over map t and check for differences
	let result = 0;
	mapS.forEach((valueS, keyS) => {
		const valueT = mapT.get(keyS) ?? new Set();
		// console.log("keyS: %s \n ", keyS, valueS, valueT);
		valueS.forEach((value) => {
			const hasAnagram = valueT.has(value);
			if (!hasAnagram) result++;
			if (!hasAnagram) console.log("value", value, hasAnagram);
		});
	});
	return result;
}

// example 1
console.log(countSubstrings("aba", "baba"));
// output 6
// console.log(countSubstrings("ab", "bb"));
// output 3
