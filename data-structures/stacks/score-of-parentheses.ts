// Given a balanced parentheses string s, return the score of the string.
// The score of a balanced parentheses string is based on the following rule:
//     "()" has score 1.
//     AB has score A + B, where A and B are balanced parentheses strings.
//     (A) has score 2 * A, where A is a balanced parentheses string.

// Example 1:
// Input: s = "()"
// Output: 1

// Example 2:
// Input: s = "(())"
// Output: 2

// Example 3:
// Input: s = "()()"
// Output: 2
function scoreOfParentheses(s: string): number {
	let score = 0;
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			stack.push(score);
			score = 0;
		} else {
			const newScore = (stack.pop() ?? 0) + Math.max(2 * score, 1);
			score = newScore;
		}
	}
	return score;
}
console.log(scoreOfParentheses("()")); // 1
console.log(scoreOfParentheses("(())")); // 2
console.log(scoreOfParentheses("((()))(())")); // 2
