import { clamp } from "./clamp";

export function setupCounter(element) {
  let count = 0;
  element.innerHTML = `count is ${count}`;
  element.addEventListener("click", () => {
    count = clamp(count + 1, 0, 10);
    element.innerHTML = `count is ${count}`;
  });
}
