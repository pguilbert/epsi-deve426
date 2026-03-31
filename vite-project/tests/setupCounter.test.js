import { expect, test, vi } from "vitest";
import { setupCounter } from "../functions/setupCounter";

test("setupCounter (should increment the counter when clicked)", () => {
  let clickCallback;
  const element = {
    innerHTML: "",
    addEventListener: vi.fn((event, callback) => {
      if (event === "click") {
        clickCallback = callback;
      }
    }),
  };

  setupCounter(element);

  // Initial update
  expect(element.innerHTML).toBe("count is 0");

  // trigger click
  if (clickCallback) {
    clickCallback();
  }
  expect(element.innerHTML).toBe("count is 1");

  // trigger click again....
  if (clickCallback) {
    clickCallback();
  }
  expect(element.innerHTML).toBe("count is 2");
});

test("setupCounter (should clamp the counter at 10)", () => {
  let clickCallback;
  const element = {
    innerHTML: "",
    addEventListener: vi.fn((event, callback) => {
      if (event === "click") {
        clickCallback = callback;
      }
    }),
  };

  setupCounter(element);

  // click 12 times to test if its works
  if (clickCallback) {
    for (let i = 0; i < 12; i++) {
      clickCallback();
    }
  }

  expect(element.innerHTML).toBe("count is 10");
});
