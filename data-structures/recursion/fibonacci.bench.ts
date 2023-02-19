import { fibonacciRecursive } from "./fibonacci-sequence.ts";
Deno.bench("find-fibonacci recursive 8", () => {
	fibonacciRecursive(8);
});

Deno.bench("find-fibonacci recursive 4", () => {
	fibonacciRecursive(4);
});
