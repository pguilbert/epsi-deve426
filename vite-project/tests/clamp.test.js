import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("should return the clamp of the number", () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(10, -5, 5)).toBe(5);
    expect(clamp("test", -5, 5)).toBe(NaN);
    expect(clamp(-5, -NaN, 5)).toBe(0);
});