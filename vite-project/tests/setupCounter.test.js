// @vitest-environment happy-dom
import { setupCounter } from "../functions/setupCounter";
import { describe, expect, test, vitest } from "vitest";

describe("setupCounter", () => {
  test.todo("should incrementer");
  test.todo("should not > 10");
});

test("should incrementer", () => {
  const element = document.createElement("div");
  document.body.appendChild(element);
  setupCounter(element);
  element.click();
  expect(element.innerHTML).toBe("count is 1");
  element.click();
  expect(element.innerHTML).toBe("count is 2");
});

test("should not > 10", () => {
  const element = document.createElement("div");
  document.body.appendChild(element);
  setupCounter(element);
  for (let i = 0; i < 11; i++) {
    element.click();
  }
  expect(element.innerHTML).toBe("count is 10");
});
