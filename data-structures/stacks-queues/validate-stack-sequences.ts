// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

// Example 1:
// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4),
// pop() -> 4,
// push(5),
// pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

// Example 2:
// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.
function validateStackSequences(pushed: number[], popped: number[]): boolean {
	const tempPushed: number[] = [];
	const tempPopped: number[] = [];
	const stack: number[] = [];

	// let pushIdx = 0;
	// let popIdx = 0;
	let i = 1;
	// every push is a push in tempPushed and every pop is a push in tempPopped
	// if the index+1===pushed[pushIdx],then popIdx++ and push in tempPopped
	// after pushing, i cannot increase as it could be used for pop
for (let i = 0; i < pushed.length; i++) {
	const element = pushed[i];

}
	console.log("i", i);
	// console.log("tempPopped", tempPopped, popIdx);
	// console.log("tempPushed", tempPushed);
	if (i > 5) return false;

	return true;
}
// example 1
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); // true
// example 2
// console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])); // false
