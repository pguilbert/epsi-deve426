import { clamp } from "../functions/clamp";
import { expect, test } from "vitest";

test("clamp above highest threshold", () => {
    expect(clamp(10, -5, 5)).toBe(5)
})

test("clamp bellow lowest threshold", () => {
    expect(clamp(-10, -5, 5)).toBe(-5)
})

test("clamp in between", () => {
    expect(clamp(0, -5, 5)).toBe(0)
})