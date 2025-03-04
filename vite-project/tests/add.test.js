import { add } from "../functions/add.js";
import { describe, expect, test } from "vitest";

describe("Fonction add", () => {
  test("2 + 3 doit retourner 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("0 + 0 doit retourner 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("Doit fonctionner avec des nombres négatifs", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test("5 + 5 doit retourner 10", () => {
    expect(add(5, 5)).toBe(10);
  });
});

