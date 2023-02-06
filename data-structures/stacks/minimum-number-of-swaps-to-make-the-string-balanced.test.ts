import { minSwaps } from "./minimum-number-of-swaps-to-make-the-string-balanced.js";
// @ts-ignore
import { describe, expect, test } from "bun:test";

describe("TEST: minimum-number-of-swaps-to-make-the-string-balanced.test.ts", () => {
	test("example 1", () => {
		expect(minSwaps("][][")).toBe(1);
	});
	test("example 2", () => {
		expect(minSwaps("]]][[[")).toBe(2);
	});
	test("example 3", () => {
		expect(minSwaps("[]")).toBe(0);
	});
});
