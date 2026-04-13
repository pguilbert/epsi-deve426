//* rather than set environment: "jsdom" in vitest.config.js we say to vitest to allow jsdom in this test when he read this file */
/** @vitest-environment jsdom */
import { expect, test } from "vitest";
import { setupCounter } from "../functions/setupCounter";

test("setupCounter (should increment the counter when clicked)", () => {
  const element = document.createElement("button");

  setupCounter(element);

  // Initial update
  expect(element.innerHTML).toBe("count is 0");

  // trigger click
  element.click();
  expect(element.innerHTML).toBe("count is 1");

  // trigger click again....
  element.click();
  expect(element.innerHTML).toBe("count is 2");
});

test("setupCounter (should clamp the counter at 10)", () => {
  const element = document.createElement("button");

  setupCounter(element);

  // click 12 times to test if its works
  for (let i = 0; i < 12; i++) {
    element.click();
  }

  expect(element.innerHTML).toBe("count is 10");
});
