// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4^x.

// Example 1:
// Input: n = 16
// Output: true

// Example 2:
// Input: n = 5
// Output: false

// Example 3:
// Input: n = 1
// Output: true
function isPowerOfK(n: number, k: number): boolean {
	if (n === k || n === 1) return true;
	if (n === 0) return false;
	const diff = n % k;
	if (diff === 0) return isPowerOfK(n / k, k);
	return false;
}
console.log(isPowerOfK(16, 4)); //true
console.log(isPowerOfK(5, 4)); //false
console.log(isPowerOfK(1, 4)); //true
console.log(isPowerOfK(-2147483648, 4)); //false
console.log(isPowerOfK(0, 4)); //false
