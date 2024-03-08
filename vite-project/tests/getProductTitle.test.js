import { expect, test, vi } from "vitest";
import { getProductTitle } from "../functions/getProductTitle";

test.each([
  { key: "0", expected: "coucou", message: "rien" },
  { key: "1", expected: "iPhone 9", message: "iphone" },
  { key: "5", expected: undefined, message: "iphone" },
  //   { key: "", expected: -5, message: "coucou" },
  //   { key: "", expected: 2, message: "coucou" },
  //   { key: "", expected: 5, message: "coucou" },
  //   { key: "", expected: 5, message: "coucou" },
  //   { key: "", expected: 5, message: "coucou" },
  //   { key: "", expected: 5, message: "coucou" },
  //   { key: "", expected: 5, message: "coucou" },
])("API test : $message", async ({ key, expected }) => {
  const data = ["coucou", "iPhone 9", "test 4"];

  const remplFetch = vi.fn(async (url) => {
    return {
      json: () => {
        const id = url.split("/")[url.split("/").length - 1];
        return {
          title: data[id],
        };
      },
    };
  });

  vi.stubGlobal("fetch", remplFetch);

  expect(await getProductTitle(key)).toBe(expected);

  expect(remplFetch).toHaveBeenCalledWith(
    `https://dummyjson.com/products/${key}`
  );

  vi.unstubAllGlobals()
});
