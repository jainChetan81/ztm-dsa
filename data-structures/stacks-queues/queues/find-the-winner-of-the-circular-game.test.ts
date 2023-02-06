// @ts-ignore
import { describe, expect, test } from "bun:test";
import { findTheWinner } from "./find-the-winner-of-the-circular-game.js";

describe("TEST: find-the-winner-of-the-circular-game.test", () => {
	test("example 1", () => {
		expect(findTheWinner(5, 2)).toBe(3);
	});
	test("example 2", () => {
		expect(findTheWinner(6, 5)).toBe(1);
	});
});
