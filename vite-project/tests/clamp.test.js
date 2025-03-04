import { clamp } from "../functions/clamp";
import { expect, test } from "vitest";

test("clamp within range", () => {
  expect(clamp(3, 0, 5)).toBe(3);
});

test("clamp below lower bound", () => {
  expect(clamp(-10, -5, 5)).toBe(-5);
});

test("clamp above upper bound", () => {
  expect(clamp(10, -5, 5)).toBe(5);
});

test("clamp at exact lower bound", () => {
  expect(clamp(-5, -5, 5)).toBe(-5);
});

test("clamp at exact upper bound", () => {
  expect(clamp(5, -5, 5)).toBe(5);
});

test("clamp with NaN values", () => {
  expect(clamp(NaN, 0, 10)).toBe(0);
});

test("clamp with non-numeric values", () => {
  expect(clamp("7", "0", "10")).toBe(7);
});
