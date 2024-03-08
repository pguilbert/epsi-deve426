import { getProductTitle } from "../functions/getProductTitle.js";
import { describe, expect, test, vi } from "vitest";

describe("getProductTitle", () => {
  test.todo("get good title");
  // test.todo("get inconnu product");
});

const mockFetch = vi.fn((url) => {
  return {
    json: () => ({
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
    }),
  };
});

test("get good title", async () => {
  vi.stubGlobal("fetch", mockFetch);
  expect(await getProductTitle(1)).toEqual("iPhone 9");
});

test("get good url", async () => {
  vi.stubGlobal("fetch", mockFetch);
  await getProductTitle(1);
  expect(mockFetch).toHaveBeenCalledWith("https://dummyjson.com/products/1/");
});
