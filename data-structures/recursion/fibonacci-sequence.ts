export function fibonacciRecursive(n: number): number {
	if (n < 2) return n;
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
// example 1
// fibonacciRecursive(3); // 0 1 1 2 3
// example 2
fibonacciRecursive(8); // 0 1 1 2 3 5 8
