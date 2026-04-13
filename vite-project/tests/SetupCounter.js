
import { describe, it, expect } from "vitest";
import { setupCounter } from "../functions/setupCounter.js";

describe("setupCounter", () => {

  it("met 0 au début", () => {
    
    const element = document.createElement("button");
 
    setupCounter(element);

    expect(element.innerHTML).toBe("count is 0");
  });

  it("augmente quand on clique", () => {
    const element = document.createElement("button");

    setupCounter(element);

    element.click();

    expect(element.innerHTML).toBe("count is 1");
  });

});
