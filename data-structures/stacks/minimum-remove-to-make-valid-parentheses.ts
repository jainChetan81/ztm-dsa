// Given a string s of '(' , ')' and lowercase English characters.
// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
// Formally, a parentheses string is valid if and only if:
//     It is the empty string, contains only lowercase characters, or
//     It can be written as AB (A concatenated with B), where A and B are valid strings, or
//     It can be written as (A), where A is a valid string.

// Example 1:
// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

// Example 2:
// Input: s = "a)b(c)d"
// Output: "ab(c)d"

// Example 3:
// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
function minRemoveToMakeValid(s: string): string {
	const stack = [];
	const splitString = s.split("");
	for (let i = 0; i < splitString.length; i++) {
		if (splitString[i] === "(") {
			stack.push(i);
		}
		if (splitString[i] === ")") {
			if (stack.length === 0) {
				splitString[i] = "";
				continue;
			}
			stack.pop();
		}
	}
	for (let i = 0; i < stack.length; i++) {
		splitString[stack[i]] = "";
	}

	return splitString.join("");
}
// example 1
console.log(minRemoveToMakeValid("lee(t(c)o)de)")); // "lee(t(c)o)de"
// example 2
console.log(minRemoveToMakeValid("a)b(c)d")); // "ab(c)d"
// example 3
console.log(minRemoveToMakeValid("))((")); // ""
