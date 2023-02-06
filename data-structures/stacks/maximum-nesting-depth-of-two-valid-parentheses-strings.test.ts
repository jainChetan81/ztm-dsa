// @ts-ignore
import { describe, expect, test } from "bun:test";
import { maxDepthAfterSplit } from "./maximum-nesting-depth-of-two-valid-parentheses-strings.js";

describe("TEST: maximum-nesting-depth-of-the-parentheses", () => {
	test("example 1", () => {
		expect(maxDepthAfterSplit("(()())")).toEqual([0, 1, 1, 1, 1, 0]);
	});
	test("example 2", () => {
		expect(maxDepthAfterSplit("()(())()")).toEqual([0, 0, 0, 1, 1, 0, 0, 0]);
	});
});
