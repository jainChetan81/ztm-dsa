// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
const isNumber = (s: string): boolean => !isNaN(Number(s));
function multiplyString(str: string, n: number) {
	let newStr = "";
	for (let i = 0; i < n; i++) {
		newStr += str;
	}
	return newStr;
}
function decodeString(s: string): string {
	let newStr = "";
	for (let i = 0; i < s.length; i++) {
		if (isNumber(s[i])) {
			// in case there are more than 1 digit
			let k = i;
			while (isNumber(s[k])) {
				k++;
			}
			const num = Number(s.slice(i, k));
			let bracketCount = 1;
			let j = k + 1;
			while (bracketCount > 0 && s[j]) {
				j++;
				if (s[j] === "[") bracketCount++;
				if (s[j] === "]") bracketCount--;
			}
			const subStr = s.slice(k + 1, j);
			newStr += multiplyString(decodeString(subStr), num);
			i = j;
			continue;
		}
		newStr += s[i];
	}
	return newStr;
}

console.log(decodeString("3[a]2[bc]")); //aaabcbc
console.log(decodeString("3[a2[c]]")); //accaccacc
console.log(decodeString("100[leetcode]")); //accaccacc
console.log(decodeString("2[abc]3[cd]ef")); //abcabccdcdcdef
