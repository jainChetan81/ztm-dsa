// Given two positive integers n and k, the binary string Sn is formed as follows:
//     S1 = "0"
//     Si = Si - 1 + "1" + reverse(invert(Si - 1)) for i > 1
// Where + denotes the concatenation operation, reverse(x) returns the reversed string x, and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0).
// For example, the first four strings in the above sequence are:
//     S1 = "0"
//     S2 = "011"
//     S3 = "0111001"
//     S4 = "011100110110001"
// Return the kth bit in Sn. It is guaranteed that k is valid for the given n.

// Example 1:
// Input: n = 3, k = 1
// Output: "0"
// Explanation: S3 is "0111001".
// The 1st bit is "0".

// Example 2:
// Input: n = 4, k = 11
// Output: "1"
// Explanation: S4 is "011100110110001".
// The 11th bit is "1".
function findKthBit(n: number, k: number): string {
	const newStr = findBit(n);
	return newStr[k - 1];
}

function findBit(n: number): string {
	if (n === 1) return "0";
	return findBit(n - 1) + "1" + reverseString(invertString(findBit(n - 1)));
}
function reverseString(str: string): string {
	if (str.length < 2) return str;
	const prefix = str.slice(0, 1);
	const suffix = str.slice(1);
	return reverseString(suffix) + reverseString(prefix);
}

function invertString(str: string): string {
	return str
		.split("")
		.map((s) => {
			if (s === "0") return "1";
			if (s === "1") return "0";
			return s;
		})
		.join("");
}
console.log(findKthBit(3, 1));
console.log(findKthBit(4, 11));
