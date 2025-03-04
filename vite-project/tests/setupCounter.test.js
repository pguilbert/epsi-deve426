import { setupCounter } from "../functions/setupCounter.js";
import { expect, test } from "vitest";

test("compte", () => {
    const element = {
        innerHTML: "",
        addEventListener: () => {}
    };
    setupCounter(element);
    expect(element.innerHTML).toBe("count is 0");
});

test("le compteur ne dépasse pas 10 clics", () => {
    let clickHandler; 
    const element = {
        innerHTML: "",
        addEventListener: (_, callback) => {
            clickHandler = callback; 
        }
    };
    setupCounter(element);
    for (let i = 0; i < 15; i++) {
        clickHandler();
    }
    expect(element.innerHTML).toBe("count is 10");
});

