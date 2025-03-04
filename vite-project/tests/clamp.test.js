import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("le nombre bouge pas", () => {
    expect(clamp(5, 1, 7)).toBe(5);
});

test("le nombre bouge pas", () => {
    expect(clamp(5, 6, 7)).toBe(6);
});

test("le nombre bouge pas", () => {
    expect(clamp(7, 1, 7)).toBe(7);
});