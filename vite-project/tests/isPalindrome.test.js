import { isPalindrome } from "../functions/isPalindrome.js";
import { expect, test } from "vitest";

test("isPalindrome True", () => {
  expect(isPalindrome("coloc")).toBe(true);
});

test("isPalindrome False", () => {
  expect(isPalindrome("melanie")).toBe(false);
});

test("isPalindrome False", () => {
  expect(isPalindrome("Et six... existe ")).toBe(true);
});

test.each(["elle", "non", "coloc"])("test each", (item) => {
  expect(isPalindrome(item)).toBe(true);
});

test("isPalindrome number in str", () => {
  expect(isPalindrome("9559")).toBe(true);
});

test("isPalindrome accents", () => {
  expect(isPalindrome("semâmes")).toBe(true);
});

test("isPalindrome virgules points", () => {
  expect(isPalindrome("Engage le jeu, que je le gagne.")).toBe(true);
});

test("isPalindrome rien", () => {
  expect(isPalindrome("")).toBe(true);
});

