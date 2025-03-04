import { setupCounter } from "../functions/setupCounter";
import { test, expect } from "vitest";
import { clamp } from "../functions/clamp";


test("setupCounter initialise et met à jour le compteur", () => {
  const element = { innerHTML: "", addEventListener: vi.fn() };
  setupCounter(element);
  expect(element.innerHTML).toBe("count is 0");
  const clickHandler = element.addEventListener.mock.calls[0][1];
  clickHandler(); 
  expect(element.innerHTML).toBe("count is 1");
  clickHandler(); 
  expect(element.innerHTML).toBe("count is 2");
  expect(clamp).toHaveBeenCalledWith(1, 0, 10);
  expect(clamp).toHaveBeenCalledWith(2, 0, 10);
});

test("setupCounter ne dépasse pas 10", () => {
  const element = { innerHTML: "", addEventListener: vi.fn() };
  setupCounter(element);
  const clickHandler = element.addEventListener.mock.calls[0][1];

  for (let i = 0; i < 11; i++) {
    clickHandler();
  }

  expect(element.innerHTML).toBe("count is 10");
});
