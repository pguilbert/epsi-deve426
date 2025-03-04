import { setupCounter } from "../functions/setupCounter.js";
import { expect, test

 } from "vitest";

test("compteur", async () => {
    const element = document.createElement("click");
    setupCounter(element);
    for (let i = 0; i < 5; i++) {
        element.click();
    }
    expect(element.innerHTML).toBe("count is 5");
});
