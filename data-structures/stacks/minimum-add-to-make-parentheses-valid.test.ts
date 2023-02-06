import { minAddToMakeValid } from "./minimum-add-to-make-parentheses-valid.js";
// @ts-ignore
import { describe, expect, test } from "bun:test";

describe("TEST: minimum-add-to-make-parentheses-valid", () => {
	test("example 1", () => {
		expect(minAddToMakeValid("())")).toBe(1);
	});
	test("example 2", () => {
		expect(minAddToMakeValid("(((")).toBe(3);
	});
});
