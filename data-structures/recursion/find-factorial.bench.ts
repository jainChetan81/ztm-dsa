// @ts-ignore
import { findFactorial } from "./find-factorial.ts";
// @ts-ignore
Deno.bench("find-factorial 5", () => {
	findFactorial(5);
});

// @ts-ignore
Deno.bench("find-factorial 4", () => {
	findFactorial(4);
});
