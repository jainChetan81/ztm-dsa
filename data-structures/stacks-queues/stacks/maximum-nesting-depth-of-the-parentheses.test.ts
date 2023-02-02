// @ts-ignore
import { describe, expect, test } from "bun:test";
import { maxDepth } from "./maximum-nesting-depth-of-the-parentheses.js";

describe("TEST: maximum-nesting-depth-of-the-parentheses.test", () => {
	test("1+(2*3)+((8)/4))+1 should return 3", () => {
		expect(maxDepth("(1+(2*3)+((8)/4))+1")).toBe(3);
	});
	test("(1)+((2))+(((3))) should return 3", () => {
		expect(maxDepth("(1)+((2))+(((3)))")).toBe(3);
	});
});
