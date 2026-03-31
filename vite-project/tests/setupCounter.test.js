import { setupCounter } from "../functions/setupCounter.js";
import { expect, test, beforeEach } from "vitest";

function createMockElement() {
  return {
    innerHTML: "",
    _listeners: {},
    addEventListener(event, cb) {
      this._listeners[event] = cb;
    },
    click() {
      if (this._listeners["click"]) this._listeners["click"]();
    },
  };
}

let element;
beforeEach(() => {
  element = createMockElement();
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
