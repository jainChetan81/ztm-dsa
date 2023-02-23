// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:
// Input: s = "1 + 1"
// Output: 2

// Example 2:
// Input: s = " 2-1 + 2 "
// Output: 3

// Example 3:
// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23

function calculate(s: string): number {
	const newStr = s.replace(/[ ()]/g, "").split("");
	console.log(newStr);
	const stack: number[] = [];
	let temp = "";
	for (let i = 0; i < newStr.length; i++) {
		if (newStr[i] === "(") {
			stack.push(i);
		}
		if (newStr[i] === ")") {
			const [currentIndex, prevIndex] = [i, stack.pop()! + 1];
			const subString = newStr.slice(prevIndex, currentIndex);
			console.log(subString);
		}
		temp += newStr[i];
	}
	return +calculateString(newStr);
}
function calculateString(arr: string[]): string {
	if (arr.length === 1) return arr[0];
	const [a, constraint, b, ...rest] = arr;
	const result = calculateValue(+a, constraint, +b);
	return calculateString([`${result}`, ...rest]);
}
function calculateValue(a: number, m: string, b: number) {
	console.log(a, m, b);
	if (isNaN(a)) return 0;
	if (isNaN(b)) return +`${a}${m}`;
	if (m === "+") return a + b;
	if (m === "-") return a - b;
	return +`${a}${m}${b}`;
}

// console.log(calculate("(1+(4+5+2)-3)+(6+8)")); //2
// console.log(calculate("2147483647")); //2
console.log(calculate("1-(     -2)")); //2
// console.log(calculate(" 2-1 + 2 ")); //3
// console.log(calculate("4+5+2")); //11
// console.log(calculateString("1 + 1".replace(/ /g, "").split(""))); //2
// console.log(calculateString(" 2-1 + 2 ".replace(/ /g, "").split(""))); //3
// console.log(calculateString("4+5+2".replace(/ /g, "").split(""))); //3
// console.log(calculate("(1+(4+5+2)-3)+(6+8)")); //23
