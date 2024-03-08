import { isPalindrome } from "../functions/isPalindrome";
import { expect, test, describe } from "vitest";

test.each(["semâmes", "sonos", "kayak"])(
  "isPalindrome(%s) should be true",
  (input) => {
    expect(isPalindrome(input)).toBe(true);
  }
);

// test("check a palindrome", () => {
//   expect(isPalindrome("bab")).toBe(true);
// });

// test("check a palindrome one letter", () => {
//   expect(isPalindrome("a")).toBe(true);
// });

// test("check a long ass palindrome", () => {
//   expect(
//     isPalindrome(
//       "baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
//     )
//   ).toBe(true);
// });

// test("check an even letter palindrome", () => {
//   expect(isPalindrome("baab")).toBe(true);
// });

// test("check a non palindrome", () => {
//   expect(isPalindrome("boh")).toBe(false);
// });

// test("check a palindrome with special chars", () => {
//   expect(isPalindrome("beee,ee!!eeheeeee&'eeb")).toBe(true);
// });

// test("check a palindrome with maj chars", () => {
//   expect(isPalindrome("bEEEeeeeheeeeeeeb")).toBe(true);
// });

test.each([
  "bab",
  "a",
  "baab",
  "",
  "elu par cette crapule",
  "beee,ee!!eehee  eee&'eeb",
  "bEEEeeeeheeeeeeeB",
  "baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
  "uwu",
  "55555552325555555",
  "58B://bkvirerI..VKBb8+5",
  "👧👩‍🦱👨‍🦳👧"
])("check a pal : %s", (pal) => {
  expect(isPalindrome(pal)).toBe(true);
});

describe.todo("COucouu")