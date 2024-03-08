import { add, clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";


test("Should work without a 'max' limit", () => {
    expect(clamp(-1,0)).toBe(0);
});

test("Should clamp negative numbers", () => {
    expect(clamp(-1,0,10)).toBe(0);
});

test("Should clamp positive numbers", () => {
    expect(clamp(11,0,10)).toBe(10);
});

test("Should not alter positive numbers in range", () => {
    expect(clamp(5,0,10)).toBe(5);
});

test("Should not alter negative numbers in range", () => {
    expect(clamp(-1,-2,10)).toBe(-1);
});

test("Should not alter '0' in range", () => {
    expect(clamp(0, -1, 5)).toBe(0);
});

test("Should not alter '-0' in range", () => {
    expect(clamp(-0, -1, 5)).toBe(-0);
});

test("Should return 'NaN' when number is 'Nan'", () => {
    expect(clamp(NaN, -1, 5)).toBe(NaN);
});