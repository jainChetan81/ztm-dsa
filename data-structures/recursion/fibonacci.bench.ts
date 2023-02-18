// @ts-ignore
import { fibonacciRecursive } from "./fibonacci-sequence.ts";
// @ts-ignore
Deno.bench("find-fibonacci recursive 8", () => {
	fibonacciRecursive(8);
});

// @ts-ignore
Deno.bench("find-fibonacci recursive 4", () => {
	fibonacciRecursive(4);
});
