import { shiftArray, romanToInteger } from "./aajtak.js";
// @ts-ignore
import { describe, expect, test } from "bun:test";
describe("TEST: test-aajtak.js.test", () => {
	test("example 1", () => {
		expect(shiftArray([0, 5, 6, 0, 0, 7, 0])).toBe([5, 6, 7, 0, 0, 0, 0]);
	});
});
describe("TEST: test-aajtak.js.test", () => {
	test("example 1", () => {
		expect(romanToInteger("XIV")).toBe(14);
	});
});