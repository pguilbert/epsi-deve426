import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("Clamp number within lower and upper bounds", () => {
  expect(clamp(-10, -5, 5)).toBe(-5); 
  expect(clamp(10, -5, 5)).toBe(5);   
  expect(clamp(3, 0, 10)).toBe(3);    
});

test("Clamp with same lower and upper bounds", () => {
  expect(clamp(5, 5, 5)).toBe(5); 
});

test("Clamp with NaN values", () => {
    expect(clamp(NaN, 0, 10)).toBe(NaN);
  });

