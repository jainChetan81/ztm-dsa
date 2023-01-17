// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:
// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:
// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

// Constraints:

//     1 <= s.length <= 5 * 105
//     s consists of uppercase and lowercase English letters and digits.
function frequencySort(s: string): string {
	const map: Record<string, number> = {};
	s = s.split("").sort().join("");
	for (const char of s) {
		const count = map[char] || 0;
		map[char] = count + 1;
	}

	const map2 = new Map<number, string>();
	for (const char of s) {
		const count = map[char]!;
		const str = map2.get(count) || "";
		if (str) {
			const a = str.repeat(count);
			console.log(count, str, a);
		}
		map2.set(count, str + char);
	}
	// console.log(map);
	let result = "";
	new Set(Object.values(map).sort((a, b) => b - a)).forEach((value) => {
		const key = map2.get(value)!;
		// console.log(key, value);
		result += key;
	});
	return result;
}
// example 1
// console.log(frequencySort("tree")); // "eert"
// example 2
// console.log(frequencySort("cccaaa")); // "aaaccc"
// example 3
// console.log(frequencySort("Aabb")); // "bbAa"
// example 4
console.log(frequencySort("loveleetcode")); // "eeeeoollvtdc"
