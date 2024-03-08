import { getProductTitle } from "../functions/getProductTitle";
import { expect, it, test, vi } from "vitest";

const mockFetch = vi.fn((url) => {
  return {
    json: () => ({ title: "iPhone 9" }),
  };
});

test("Should return the title of the product", async () => {
  vi.stubGlobal("fetch", mockFetch);

  const title = await getProductTitle(1);
  expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/products/1/");
  expect(mockFetch).toHaveBeenCalledTimes(1);
  expect(title).toEqual("iPhone 9");
});
