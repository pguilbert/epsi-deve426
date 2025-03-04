import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("returns the number itself when within bounds", () => {
    expect(clamp(5, 1, 6)).toBe(5);
});

test("clamps a number below the lower bound", () => {
    expect(clamp(-1, 1, 5)).toBe(1);
});

test("clamps a number above the upper bound", () => {
    expect(clamp(7, 1, 5)).toBe(5);
});

test("handles string inputs by converting them to numbers", () => {
    expect(clamp("7", "1", "5")).toBe(5);
});

test("returns NaN when input is NaN", () => {
    expect(clamp(NaN, -5, 5)).toBe(NaN);
});
  