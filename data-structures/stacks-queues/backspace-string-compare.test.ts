import { backspaceCompare } from "./backspace-string-compare";
// @ts-ignore
import { describe, expect, test } from "bun:test";

describe("TEST: backspace-string-compare.test", () => {
	test("example 1", () => {
		expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
	});
	test("example 2", () => {
		expect(backspaceCompare("ab##", "c#d#")).toBe(true);
	});
	test("example 3", () => {
		expect(backspaceCompare("a#c", "b")).toBe(false);
	});
});
