// @ts-ignore
import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
// @ts-ignore
import { findFactorial } from "./find-factorial.ts";

// @ts-ignore
Deno.test("test1 find-factorial", () => {
	assertEquals(findFactorial(5), 120);
	assertEquals(findFactorial(4), 24);
});
