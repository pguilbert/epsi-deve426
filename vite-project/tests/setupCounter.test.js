import { setupCounter } from "../functions/setupCounter";
import { expect, test, beforeEach } from "vitest";
import { defineConfig } from "../vitest.config.js";

  let button;
  
  beforeEach(() => {
    button = document.createElement("button");
    document.body.appendChild(button);
  });
  
  test("Le compteur démarre à 0", () => {
    setupCounter(button);
    expect(button.innerHTML).toBe("count is 0");
  });
  
  test("Le compteur s'incrémente au clic", () => {
    setupCounter(button);
    button.click();
    expect(button.innerHTML).toBe("count is 1");
  });
  
  test("Le compteur ne dépasse pas 10", () => {
    setupCounter(button);
    for (let i = 0; i < 15; i++) {
      button.click();
    }
    expect(button.innerHTML).toBe("count is 10");
  });

