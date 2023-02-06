// @ts-ignore
import { describe, expect, test } from "bun:test";
import { countStudents } from "./number-of-students-unable-to-eat-lunch.js";

describe("TEST: number-of-students-unable-to-eat-lunch.test", () => {
	test("example 1", () => {
		expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1])).toBe(0);
	});
	test("example 2", () => {
		expect(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])).toBe(3);
	});
});
