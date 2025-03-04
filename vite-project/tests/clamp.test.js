import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("clamp a lower number", () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

test("clamp a higher number", () => {
    expect(clamp(10, -5, 5)).toBe(5);
});

test("clamp a number between upper and lower", () => {
    expect(clamp(3, -5, 5)).toBe(3);
});

test("clamp a string number", () => {
    expect(clamp("3", -5, 5)).toBe(3);
});

test("clamp a NaN", () => {
    expect(clamp(NaN, -5, 5)).toBe(NaN);
});

test("clamp a number, lower NaN", () => {
    expect(clamp(-3, NaN, 5)).toBe(0);
});

test("clamp a number, upper NaN", () => {
    expect(clamp(3, -5, NaN)).toBe(0);
});
  