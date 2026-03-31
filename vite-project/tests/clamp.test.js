import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("clamp", () => {
    expect(clamp(5, 1, 10)).toBe(5);
});