// @vitest-environment jsdom
import { setupCounter } from "../functions/setupCounter.js";
import { expect, test, beforeEach } from "vitest";

let element;
beforeEach(() => {
  document.body.innerHTML = "";
  element = document.createElement("button");
  document.body.appendChild(element);
});

test("initializes counter to 0", () => {
  setupCounter(element);
  expect(element.innerHTML).toBe("count is 0");
});

test("increments counter on click", () => {
  setupCounter(element);
  element.click();
  expect(element.innerHTML).toBe("count is 1");
  element.click();
  expect(element.innerHTML).toBe("count is 2");
});

test("clamps counter at 10", () => {
  setupCounter(element);
  for (let i = 0; i < 15; i++) {
    element.click();
  }
  expect(element.innerHTML).toBe("count is 10");
});
