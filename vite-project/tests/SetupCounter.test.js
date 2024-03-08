// @vitest-environment happy-dom
import { setupCounter } from "../functions/setupCounter";
import { test, except} from "vitest";

test("setup counter", () => {
  const element = document.createElement("button");
    element.click("click");

  expect(element.innerHTML);
});
