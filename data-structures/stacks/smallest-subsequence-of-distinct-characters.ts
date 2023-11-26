// Given a string s, return the
// lexicographically smallest subsequence
//  of s that contains all the distinct characters of s exactly once.

// Example 1:
// Input: s = "bcabc"
// Output: "abc"
// Example 2:
// Input: s = "cbacdcbc"
// Output: "acdb"
function smallestSubsequence(s: string): string {
	const stack: string[] = [];
	const seen = new Set<string>();
	const lastOccurrence = new Map<string, number>();
	for (let i = 0; i < s.length; i++) {
		lastOccurrence.set(s[i], i);
	}
	for (let i = 0; i < s.length; i++) {
		if (seen.has(s[i])) continue;
		while (stack.length > 0 && stack[stack.length - 1] > s[i] && lastOccurrence.get(stack[stack.length - 1])! > i) {
			seen.delete(stack.pop()!);
		}
		stack.push(s[i]);
		seen.add(s[i]);
	}
	return stack.join("");
}
console.log(smallestSubsequence("bcabc")); //abc
console.log(smallestSubsequence("cbacdcbc")); //acdb
