// You are given a string s that consists of lower case English letters and brackets.
// Reverse the strings in each pair of matching parentheses, starting from the innermost one.
// Your result should not contain any brackets.

// Example 1:
// Input: s = "(abcd)"
// Output: "dcba"

// Example 2:
// Input: s = "(u(love)i)"
// Output: "iloveu"
// Explanation: The substring "love" is reversed first, then the whole string is reversed.

// Example 3:
// Input: s = "(ed(et(oc))el)"
// Output: "leetcode"
// Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

function reverseParentheses(s: string): string {
	const temStack = [];
	const strSplit = s.split("");
	for (let i = 0; i < strSplit.length; i++) {
		if (strSplit[i] === "(") {
			temStack.push(i);
		}
		if (strSplit[i] === ")") {
			const lastOpenBracket = temStack.pop()!;
			// reverse a string between two indices, lastOpenBracket+1 and i-1 using for loop
			for (let j = lastOpenBracket + 1, k = i - 1; j < k; j++, k--) {
				[strSplit[j], strSplit[k]] = [strSplit[k], strSplit[j]];
			}
			strSplit[lastOpenBracket] = "";
			strSplit[i] = "";
		}
	}
	return strSplit.join("");
}
// example 1
console.log(reverseParentheses("(abcd)")); // "dcba"
// example 2
console.log(reverseParentheses("(u(love)i)")); // "iloveu"
// // example 3
console.log(reverseParentheses("(ed(et(oc))el)")); // "leetcode"
