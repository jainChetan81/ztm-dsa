// Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.
// The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104.

// Example 1:
// Input: expression = "2-1-1"
// Output: [0,2]
// Explanation:
// ((2-1)-1) = 0
// (2-(1-1)) = 2

// Example 2:
// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]
// Explanation:
// (2*(3-(4*5))) = -34
// ((2*3)-(4*5)) = -14
// ((2*(3-4))*5) = -10
// (2*((3-4)*5)) = -10
// (((2*3)-4)*5) = 10
const METHOD = {
	MULTIPLY: "*",
	ADD: "+",
	SUBTRACT: "-"
} as const;
const multiply = (a: number, b: number) => a * b;
const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
function diffWaysToCompute(expression: string): number[] {
	if (expression.length === 0) return [];
	const result: number[] = [];
	for (let i = 0; i < expression.length; i++) {
		const currentChar = expression[i];
		if (Object.values(METHOD).join("").includes(currentChar)) {
			const left = diffWaysToCompute(expression.slice(0, i));
			const right = diffWaysToCompute(expression.slice(i + 1));
			for (let l = 0; l < left.length; l++) {
				for (let r = 0; r < right.length; r++) {
					if (currentChar === METHOD.MULTIPLY) result.push(multiply(left[l], right[r]));
					if (currentChar === METHOD.ADD) result.push(add(left[l], right[r]));
					if (currentChar === METHOD.SUBTRACT) result.push(subtract(left[l], right[r]));
				}
			}
		}
	}
	if (result.length === 0 && typeof +expression === "number") return [+expression];
	return result;
}

// example
// Input: expression = "2-1-1"
// Output: [0,2]
console.log("2-1-1: final=>", diffWaysToCompute("2-1-1")); // [0,2]

// example
console.log(diffWaysToCompute("2*3-4*5")); // [-34,-14,-10,-10,10]
