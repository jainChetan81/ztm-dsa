// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
function climbStairs(n: number): number {
	const cache = new Map<number, number>();
	function stairs(n: number, current: number, total: number): number {
		if (current > n) return 0;
		if (current === n) return 1;
		if (cache.has(current)) return cache.get(current)!;
		const result = stairs(n, current + 1, total) + stairs(n, current + 2, total);
		cache.set(current, result);
		return result;
	}
	return stairs(n, 0, 0);
}
console.log(climbStairs(2)); //2
console.log(climbStairs(3)); //3
// console.time("climbStairs");
console.log(climbStairs(44)); //1134903170
// console.timeEnd("climbStairs");
