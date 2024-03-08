// @vitest-environment happy-dom

import { add } from "../functions/add.js";
import { expect, test, vi } from "vitest";
import { setupCounter } from "../functions/setupCounter.js";



test("verify setupCounter", () => {
    const element = document.createElement('button');
    setupCounter(element);
    expect(element.innerHTML).toEqual('count is 0');
});

test('verify setupCounter1', () => {
    const element1  = document.createElement('button')
    element1.addEventListener('click', ()=>{})
    const result = setupCounter(element1, 5)
    expect(result.textContent).toBe('count is 5')
})