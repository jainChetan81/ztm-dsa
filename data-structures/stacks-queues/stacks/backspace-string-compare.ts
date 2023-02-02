// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.
// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".
// @ts-ignore
class StackArray<TType> {
	private array: TType[];
	constructor() {
		this.array = [];
	}
	peek() {
		return this.array;
	}
	push(value: TType) {
		this.array.push(value);
		return this;
	}
	pop() {
		return this.array.pop();
	}
}
export function backspaceCompare(s: string, t: string): boolean {
	const stackS = new StackArray<string>();
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "#") {
			stackS.pop();
			continue;
		}
		stackS.push(s[i]);
	}
	const stackT = new StackArray<string>();
	for (let i = 0; i < t.length; i++) {
		if (t[i] === "#") {
			stackT.pop();
			continue;
		}
		stackT.push(t[i]);
	}
	return stackS.peek().join("") === stackT.peek().join("");
}
// example 1
console.log(backspaceCompare("ab#c", "ad#c")); //true
// example 2
console.log(backspaceCompare("ab##", "c#d#")); //true
// example 3
console.log(backspaceCompare("a#c", "b")); //false
