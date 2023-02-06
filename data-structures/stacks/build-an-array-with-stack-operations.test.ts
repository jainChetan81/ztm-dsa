import { buildArray } from "./build-an-array-with-stack-operations.js";
// @ts-ignore
import { describe, expect, test } from "bun:test";

describe("TEST:build-an-array-with-stack-operations", () => {
	test("example 1", () => {
		expect(buildArray([1, 3], 3)).toEqual(["Push", "Push", "Pop", "Push"]);
	});
	test("example 2", () => {
		expect(buildArray([1, 2, 3], 3)).toEqual(["Push", "Push", "Push"]);
	});
	test("example 3", () => {
		expect(buildArray([1, 2], 4)).toEqual(["Push", "Push"]);
	});
});
