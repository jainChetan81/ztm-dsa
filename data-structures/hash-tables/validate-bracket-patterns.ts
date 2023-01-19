// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "({})"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false

function validateString(str: string): boolean {
	const arr: string[] = [];
	for (let i = 0; i < str.length; i++) {
		if (!["}", ")", "]"].includes(str[i])) {
			// if not reverse bracket, push to arr
			arr.push(str[i]);
		} else {
			let reverse = "";
			if (str[i] === ")") reverse = "(";
			if (str[i] === "}") reverse = "{";
			if (str[i] === "]") reverse = "[";
			if (reverse !== arr[arr.length - 1]) return false;
			arr.pop();
		}
	}
	return true;
}
// example 1
console.log(validateString("({}))")); // true
console.log(validateString("()[]{}")); // true
console.log(validateString("(]")); // false
