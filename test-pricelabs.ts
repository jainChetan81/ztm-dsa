// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

const BRACKETS = {
	P: "(",
	C: "{",
	S: "["
} as const;
export function checkEqualBrackets(str: string) {
	const stack: string[] = [];
	for (let i = 0; i < str.length; i++) {
		if ([BRACKETS.P, "{", "["].includes(str[i])) {
			stack.push(str[i]);
			continue;
		}
		const lastElement = stack.at(-1);
		if (str[i] === ")") {
			if (lastElement === BRACKETS.P) stack.pop();
			else return false;
		}
		if (str[i] === "}") {
			if (lastElement === BRACKETS.C) stack.pop();
			else return false;
		}
		if (str[i] === "]") {
			if (lastElement === BRACKETS.S) stack.pop();
			else return false;
		}
	}
	return stack.length === 0;
}
console.log(checkEqualBrackets("()")); //true
console.log(checkEqualBrackets("(){()}")); //true
console.log(checkEqualBrackets("({(}))")); //false
console.log("--------------------------------------------------");
function addToArrayForm(num: number[], k: number): number[] {
	let carry = k;
	for (let i = num.length - 1; i >= 0; i--) {
		[num[i], carry] = [(num[i] + carry) % 10, Math.floor((num[i] + carry) / 10)];
		console.log(num[i], carry);
	}
	if (carry === 0) return num;
	if (carry < 10) [carry, ...num];
	// convert carry to array
	const carryArray = carry.toString().split("").map(Number);
	return [...carryArray, ...num];
}

// console.log(addToArrayForm([8, 9, 9], 15));
// console.log(addToArrayForm([9, 9, 9], 200));
// console.log(addToArrayForm([1, 3, 9], 8));
// console.log(addToArrayForm([0], 10000));
// console.log(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516)); //[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516); //[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
