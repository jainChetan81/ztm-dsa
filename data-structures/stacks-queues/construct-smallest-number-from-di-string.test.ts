import { smallestNumber } from "./construct-smallest-number-from-di-string";
// @ts-ignore
import { describe, expect, test } from "bun:test";

describe("TEST: construct-smallest-number-from-di-string.test", () => {
	test("example 1", () => {
		expect(smallestNumber("IIIDIDDD")).toBe("123549876");
	});
	test("example 2", () => {
		expect(smallestNumber("DDD")).toBe("4321");
	});
});
