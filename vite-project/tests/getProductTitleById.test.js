import { expect, test, vi } from "vitest";
import { getProductTitleById } from "../functions/getProductTitleById.js";

const mockFetch = vi.fn((url) => {
  if (url === "https://dummyjson.com/products/1/") {
    return Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ title: "Essence Mascara Lash Princess" }),
    });
  }
  return Promise.resolve({
    status: 404,
  });
});

vi.stubGlobal("fetch", mockFetch);

test("test get product title by id", async () => {
  expect(await getProductTitleById(1)).toBe("Essence Mascara Lash Princess");
  await expect(getProductTitleById(999)).rejects.toThrow(
    "Failed to fetch product",
  );
});