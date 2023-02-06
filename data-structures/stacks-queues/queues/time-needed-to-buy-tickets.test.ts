// @ts-ignore
import { describe, expect, test } from "bun:test";
import { timeRequiredToBuy } from "./time-needed-to-buy-tickets.js";

describe("TEST: time-needed-to-buy-tickets.test", () => {
	test("example 1", () => {
		expect(timeRequiredToBuy([2, 3, 2], 2)).toBe(6);
	});
	test("example 2", () => {
		expect(timeRequiredToBuy([5, 1, 1, 1], 0)).toBe(8);
	});
});
