import { getProductTitle } from "../functions/getProductTitle";
import { expect, test, vi } from "vitest";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: "Test Product" }),
  })
);

test("fetch product title successfully", async () => {
  const title = await getProductTitle(1);
  expect(title).toBe("Test Product");
});

test("handle fetch error", async () => {
  fetch.mockImplementationOnce(() => Promise.reject(new Error("Network error")));
  await expect(getProductTitle(1)).rejects.toThrow("Failed to fetch product");
});
