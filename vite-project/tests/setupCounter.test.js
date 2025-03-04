import { setupCounter } from "../functions/setupCounter.js";
import { expect, test, beforeEach, afterEach } from "vitest";
import { Window } from "happy-dom";

let window;
let document;
let button;

beforeEach(() => {
  window = new Window();
  document = window.document;
  button = document.createElement("button");
  document.body.appendChild(button);
});

afterEach(() => {
  document.body.innerHTML = "";
});

test("counter initializes to 0", () => {
  setupCounter(button);
  expect(button.innerHTML).toBe("count is 0");
});

test("counter increments when clicked", () => {
  setupCounter(button);
  button.click();
  expect(button.innerHTML).toBe("count is 1");
  button.click();
  expect(button.innerHTML).toBe("count is 2");
});

test("counter doesn't increment beyond 10", () => {
  setupCounter(button);
  for (let i = 0; i < 15; i++) {
    button.click();
  }
  expect(button.innerHTML).toBe("count is 10");
});

test("counter decrements when shift+clicked", () => {
  setupCounter(button);
  for (let i = 0; i < 5; i++) {
    button.click();
  }
  expect(button.innerHTML).toBe("count is 5");
  const event = new window.MouseEvent("click", { shiftKey: true });
  button.dispatchEvent(event);
  expect(button.innerHTML).toBe("count is 6");
});

test("counter doesn't decrement below 0", () => {
  setupCounter(button);
  const event = new window.MouseEvent("click", { shiftKey: true });
  button.dispatchEvent(event);
  expect(button.innerHTML).toBe("count is 1");
});