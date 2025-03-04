import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("the range of the functions lower", () => {
    expect(clamp(-28, -5, 5)).toBe(-5);
});

test("the range of the functions upper", () => {
    expect(clamp(13, -5, 4)).toBe(4);
});

test("the range of the functions inside", () => {
    expect(clamp(6, 0, 10)).toBe(6);
});