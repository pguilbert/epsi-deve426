import { setupCounter } from "../functions/setupCounter";
import { expect, test } from "vitest";

test("Le compteur démarre bien à 0 après l'initialisation", () => {
    const element = document.createElement("button");
    setupCounter(element);
    expect(element.innerHTML).toBe("count is 0");
});

test("Le compteur soit bien a 3 apres 3 clique", () => {
    const element = document.createElement("button");
    setupCounter(element);
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    element.click();
    expect(element.innerHTML).toBe("count is 10");
});
