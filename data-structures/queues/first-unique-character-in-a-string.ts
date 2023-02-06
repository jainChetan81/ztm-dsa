// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

export function firstUniqChar(s: string): number {
	const obj: Record<string, [number, number]> = {};
	for (let i = 0; i < s.length; i++) {
		const count = obj[s[i]]?.[0] ?? 0;
		const index = obj[s[i]]?.[1] ?? i;
		obj[s[i]] = [count + 1, index];
		// console.log(s[i], obj[s[i]]);
	}
	for (let i = 0; i < Object.keys(obj).length; i++) {
		const element = Object.keys(obj)[i];
		if (obj[element][0] === 1) return obj[element][1];
	}
	return -1;
}
// example 1
console.log(firstUniqChar("leetcode")); // 0
// example 2
console.log(firstUniqChar("loveleetcode")); // 2
// example 3
console.log(firstUniqChar("aabb")); // -1
console.log(firstUniqChar("dddccdbba")); // 8
