//@vitest-environment happy-dom

import { beforeAll, beforeEach, expect, test } from "vitest";
import { setupCounter } from "../functions/setupCounter.js";

function getCount(text) {
  return +text.split("count is ")[1];
}

const element = document.createElement("div");
document.body.appendChild(element);
element.id = "elem";

beforeEach(() => {
  setupCounter(element);
});

test("Count goes up by 1 (from 0)", async () => {
  expect(getCount(document.querySelector("#elem").innerHTML)).toBe(0);
  element.click();
  expect(getCount(document.querySelector("#elem").innerHTML)).toBe(1);

  console.log(getCount(document.querySelector("#elem").innerHTML));
  console.log("coucou");
});

test("Count goes up by 56 (needs to stay 10)", async () => {
  expect(getCount(document.querySelector("#elem").innerHTML)).toBe(0);

  for (let i = 0; i < 56; i++) {
    element.click();
  }

  expect(getCount(document.querySelector("#elem").innerHTML)).toBe(10);

  console.log(getCount(document.querySelector("#elem").innerHTML));
  console.log("coucou");
});

test("Count goes down??!", async () => {
  expect(getCount(document.querySelector("#elem").innerHTML)).toBe(0);

  for (let i = 0; i < 56; i++) {
    element.click();
  }

  expect(getCount(document.querySelector("#elem").innerHTML)).toBe(10);

  console.log(getCount(document.querySelector("#elem").innerHTML));
  console.log("coucou");
});