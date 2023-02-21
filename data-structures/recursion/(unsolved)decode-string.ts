// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
function decodeString(s: string, num = 1): string {
	const stack = [];
	const indexArr: number[] = [];
	let newStr = "";
	let multi = 0;
	const sArr = s.split("");
	for (let i = 0; i < sArr.length; i++) {
		if (!isNaN(+sArr[i])) {
			multi = +sArr[i];
			stack.push(multi);
		}
		if (sArr[i] === "[") {
			stack.push(sArr[i]);
			indexArr.push(i);
		}
		if (stack.length === 0) newStr += sArr[i];
		if (sArr[i] === "]") {
			console.log(newStr, stack, indexArr);
			stack.pop();
			const num = stack.pop() as number;
			const numberIndex = indexArr.pop()!;
			newStr += multiplyString(sArr.slice(numberIndex + 1, i).join(""), num);
			console.log("newStr", newStr);
		}
	}
	return newStr;
}
function multiplyString(str: string, n: number) {
	// console.log(`${str.length}: multiplyString=>`, str, n);
	let newStr = "";
	for (let i = 0; i < n; i++) {
		newStr += str;
	}
	return newStr;
}
// console.log(decodeString("3[a]2[cb]")); //aaabcbc
console.log(decodeString("3[a2[c]]")); //accaccacc
// console.log(decodeString("2[abc]3[cd]ef")); //abcabccdcdcdef
