import { validateStackSequences } from "./validate-stack-sequences.js";
// @ts-ignore
import { describe, expect, test } from "bun:test";

describe("TEST: validate-stack-sequences", () => {
	test("should return true", () => {
		expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toBe(true);
	});
	test("should return false", () => {
		expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toBe(false);
	});
});
