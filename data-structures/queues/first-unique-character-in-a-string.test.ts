// @ts-ignore
import { describe, expect, test } from "bun:test";
import { firstUniqChar } from "./first-unique-character-in-a-string.js";

describe("TEST: first-unique-character-in-a-string.test", () => {
	test("example 1", () => {
		expect(firstUniqChar("leetcode")).toBe(0);
	});
	test("example 2", () => {
		expect(firstUniqChar("loveleetcode")).toBe(2);
	});
	test("example 3", () => {
		expect(firstUniqChar("aabb")).toBe(-1);
	});
	test("example 4", () => {
		expect(firstUniqChar("dddccdbba")).toBe(8);
	});
});
