import { setupCounter } from "../functions/setupCounter.js";
import { expect, test } from "vitest";

test("should return the html with the good counter number", () => {
    const element = document.createElement('div');
    setupCounter(element);
    expect(element.innerHTML).toBe(`count is 0`);
    element.click();
    expect(element.innerHTML).toBe(`count is 1`);
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    expect(element.innerHTML).toBe(`count is 10`);
    element.click();
    expect(element.innerHTML).toBe(`count is 10`);
});   