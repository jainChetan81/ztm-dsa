// Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.
// Return the minimum number of substrings in such a partition.
// Note that each character should belong to exactly one substring in a partition.

// Example 1:

// Input: s = "abacaba"
// Output: 4
// Explanation:
// Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
// It can be shown that 4 is the minimum number of substrings needed.

// Example 2:

// Input: s = "ssssss"
// Output: 6
// Explanation:
// The only valid partition is ("s","s","s","s","s","s").
// Constraints:

//     1 <= s.length <= 105
//     s consists of only English lowercase letters.
function partitionString(s: string): number {
	// keep the set in the end is the substring
	// we don't have to worry about strings repeating only if they are being repeated in the substring
	// so take a set and adding char to it until it is repeated., then just add the count and reset the set
	const set = new Set<string>();
	let count = 1;
	for (let i = 0; i < s.length; i++) {
		if (set.has(s[i])) {
			count++;
			set.clear();
		}
		set.add(s[i]);
	}
	return count;
}

// Example 1:
console.log(partitionString("abacaba"));
//  Output: 4

// Example 2:
// console.log(partitionString("ssssss"));
//  Output: 6
