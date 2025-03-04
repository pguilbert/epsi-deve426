import { setupCounter } from "../functions/setupCounter";
import { expect, test } from "vitest";

test("counter increments within bounds", () => {
  const element = { innerHTML: "", addEventListener: (_, callback) => callback() };
  setupCounter(element);
  expect(element.innerHTML).toBe("count is 1");
});

test("counter does not exceed upper bound", () => {
  const element = {
    innerHTML: "",
    addEventListener: (_, callback) => {
      for (let i = 0; i < 15; i++) callback();
    },
  };
  setupCounter(element);
  expect(element.innerHTML).toBe("count is 10");
});
