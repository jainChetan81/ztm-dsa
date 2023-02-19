import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { findFactorial } from "./find-factorial.ts";

Deno.test("test1 find-factorial", () => {
	assertEquals(findFactorial(5), 120);
	assertEquals(findFactorial(4), 24);
});
