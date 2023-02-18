import { checkEqualBrackets } from "./test-pricelabs.js";
// @ts-ignore
import { describe, expect, test } from "bun:test";

describe("TEST: test-pricelabs.js.test", () => {
	test("example 1", () => {
		expect(checkEqualBrackets("()")).toBe(true);
	});
	test("example 2", () => {
		expect(checkEqualBrackets("(){()}")).toBe(true);
	});
	test("example 3", () => {
		expect(checkEqualBrackets("({(}))")).toBe(false);
	});
});
