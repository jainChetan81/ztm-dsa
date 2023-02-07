// @ts-ignore
import { describe, expect, test } from "bun:test";
import { deckRevealedIncreasing } from "./(unsolved)reveal-cards-in-increasing-order.js";

describe("TEST: reveal-cards-in-increasing-order.test", () => {
	test("example 1", () => {
		expect(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])).toEqual([2, 13, 3, 11, 5, 17, 7]);
	});
	test("example 2", () => {
		expect(deckRevealedIncreasing([1, 1000])).toEqual([1, 1000]);
	});
});
