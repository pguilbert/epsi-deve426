import { clamp } from "../functions/clamp";
import { expect, test } from "vitest";

test("clamp between", () => {
  expect(clamp(3, -5, 10)).toBe(3);
});

test("clamp min", () => {
  expect(clamp(-6, -5, 10)).toBe(-5);
});
test("should work without max limit", () => {
    expect(clamp(-4, -5)).toBe(-4);
});

test("clamp 0", () => {
  expect(clamp(0, 0, 0)).toBe(0);
});

test("should not alter negative number", () => {
  expect(clamp(-3, -5, -1)).toBe(-3);
});

test("should not alter positive number", () => {
    expect(clamp(2, -5, 25)).toBe(2);
});

test("should not alter '0' in range'", () => {
    expect(clamp(0, -5, 25)).toBe(0);
});

test("should not alter '0' in range'", () => {
    expect(clamp(-0, -5, 25)).toBe(-0);
});

test("should return NaN'", () => {
    expect(clamp('hi', -5, 25)).toBe(NaN);
});

