// @vitest-environment happy-dom
import { setupCounter } from "../functions/setupCounter";
import { expect, test, vi } from "vitest";


test("should add 1", () => {
    const element = document.createElement("div");
    setupCounter(element);
    element.click();
    expect(element.innerHTML).toBe("count is 1");
  });

  test("should stop at 10", () => {
    const element = document.createElement("div");
    setupCounter(element);
    for(let i=0; i< 13; i++){
        element.click();
    }
    expect(element.innerHTML).toBe("count is 10");
  });