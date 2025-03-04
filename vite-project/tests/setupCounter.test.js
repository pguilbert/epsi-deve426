import { beforeEach, describe, test, expect, vi } from "vitest";
import { setupCounter } from "../functions/setupCounter";
import { clamp } from "../functions/clamp";

describe("setupCounter", () => {
  test("Initialisation du compteur à 0", () => {
    const element = document.getElementById("counter");
    setupCounter(element);
    expect(element.innerHTML).toBe("count is 0");
  });
});