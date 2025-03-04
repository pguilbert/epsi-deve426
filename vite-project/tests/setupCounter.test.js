import { setupCounter} from "../functions/setupCounter.js";
import { expect, test } from "vitest";

test("add two number", () => {
  const element = document.createElement("button");
  setupCounter(element);
  expect(element.innerHTML).toBe("count is 0");
  element.click();
  expect(element.innerHTML).toBe("count is 1");
  element.click();
  expect(element.innerHTML).toBe("count is 2");
});