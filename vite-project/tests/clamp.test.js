import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("number clamp", () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(10, -5, 5)).toBe(5);
    expect(clamp("test", -5, 5)).toBe(NaN);
    expect(clamp(-5, -NaN, 5)).toBe(0);
});