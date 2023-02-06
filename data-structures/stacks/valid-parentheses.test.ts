import { isValid } from "./valid-parentheses.js";
// @ts-ignore
import { describe, expect, test } from "bun:test";

describe("TEST: backspace-string-compare.test", () => {
	test("example 1", () => {
		expect(isValid("()")).toBe(true);
	});
	test("example 2", () => {
		expect(isValid("()[]{}")).toBe(true);
	});
	test("example 3", () => {
		expect(isValid("(]")).toBe(false);
	});
	test("example 4", () => {
		expect(isValid("[")).toBe(false);
	});
});
