import { clamp } from "../functions/clamp";
import { describe, expect, test } from "vitest";

describe("clamp", () => {
  test.todo("should work without a max limit");
  test.todo("should clamp negative numbers");
  test.todo("should clamp positive numbers");
  test.todo("should not alter negative numbers in range");
  test.todo("should not alter positive numbers in range");
  test.todo("should not alter '0' in range");
  test.todo("should not alter '-0' in range");
  test.todo("should return 'NaN' when 'number' is 'NaN'");
});

test("should work without a max limit", () => {
  expect(clamp(10, -5)).toEqual(0);
});

test("should work without a max limit", () => {
  expect(clamp(-4, -5)).toEqual(-4);
});

test("should clamp negative numbers", () => {
  expect(clamp(-10, -25, -5)).toEqual(-10);
});

test("should clamp positive numbers", () => {
  expect(clamp(10, 4, 15)).toEqual(10);
});

test("should not alter negative numbers in range", () => {
  expect(clamp(-10, -4, 15)).toEqual(-4);
});

test("should not alter positive numbers in range", () => {
  expect(clamp(10, -4, 15)).toEqual(10);
});

test("should not alter '0' in range", () => {
  expect(clamp(0, -5, 5)).toEqual(0);
});

test("should not alter '-0' in range", () => {
  expect(clamp(-0, -5, 5)).toEqual(-0);
});

test("should return 'NaN' when 'number' is 'NaN'", () => {
  expect(clamp(NaN)).toEqual(NaN);
});
