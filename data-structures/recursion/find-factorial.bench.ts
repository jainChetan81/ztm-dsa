import { findFactorial } from "./find-factorial.ts";
Deno.bench("find-factorial 5", () => {
	findFactorial(5);
});

Deno.bench("find-factorial 4", () => {
	findFactorial(4);
});
