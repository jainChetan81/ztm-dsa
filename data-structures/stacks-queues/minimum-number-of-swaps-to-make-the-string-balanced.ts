// You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.
// A string is called balanced if and only if:
//     It is the empty string, or
//     It can be written as AB, where both A and B are balanced strings, or
//     It can be written as [C], where C is a balanced string.
// You may swap the brackets at any two indices any number of times.
// Return the minimum number of swaps to make s balanced.

// Example 1:
// Input: s = "][]["
// Output: 1
// Explanation: You can make the string balanced by swapping index 0 with index 3.
// The resulting string is "[[]]".

// Example 2:
// Input: s = "]]][[["
// Output: 2
// Explanation: You can do the following to make the string balanced:
// - Swap index 0 with index 4. s = "[]][][".
// - Swap index 1 with index 5. s = "[[][]]".
// The resulting string is "[[][]]".

// Example 3:
// Input: s = "[]"
// Output: 0
// Explanation: The string is already balanced.

export function minSwaps(str: string): number {
	let totalSwap = 0;
	let stack: string[] = [];
	const s = str.split("");
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "[") stack.push(s[i]);
		if (s[i] === "]" && stack.length > 0) stack.pop();
		if (s[i] === "]" && stack.length === 0) {
			let reverseStack: number[] = [];
			let secondSwapIndex = i + 1;
			// console.log(i, ". s[i]->", s[i]);
			for (let j = i + 1; j < s.length; j++) {
				if (s[j] === "[") {
					secondSwapIndex = j;
					reverseStack.push(j);
				}
				if (s[j] === "]" && reverseStack.length > 0) reverseStack.pop();
			}
			secondSwapIndex = reverseStack[0];
			console.log(reverseStack);
			// console.log(i, ". s[i]->", s[i], "secondSwapIndex->", secondSwapIndex);
			[s[i], s[secondSwapIndex]] = [s[secondSwapIndex], s[i]];
			totalSwap++;
		}
	}
	return s;
}
// example 1
console.log(minSwaps("][][")); // 1
// example 2
// console.log(minSwaps("]]][[[")); // 2
// example 3
// console.log(minSwaps("[]")); // 0
