// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

export function isValid(s: string): boolean {
	const stack: string[] = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ")" && stack.pop() !== "(") return false;
		if (s[i] === "}" && stack.pop() !== "{") return false;
		if (s[i] === "]" && stack.pop() !== "[") return false;
		if (["(", "{", "["].includes(s[i])) stack.push(s[i]);
	}
	return stack.length > 0 ? false : true;
}

// Example 1
console.log(isValid("()")); //true
// Example 2
console.log(isValid("()[]{}")); //true
// Example 3
console.log(isValid("(]")); //false
// Example 4
console.log(isValid("[")); //false
