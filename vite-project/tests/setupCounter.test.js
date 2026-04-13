import { describe, expect, it } from "vitest";
import { setupCounter } from "../functions/setupCounter";

describe("setupCounter", () => {
  it("should not increment the counter when clicked", () => {
    const element = document.createElement("button");
    setupCounter(element);
    expect(element.innerHTML).toBe("count is 0");
  });
  
  it("should increment the counter when clicked", () => {
    const element = document.createElement("button");
    setupCounter(element);
    element.click();
    expect(element.innerHTML).toBe("count is 1");
  })
});