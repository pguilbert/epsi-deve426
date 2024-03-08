import { getProductTitle } from "../functions/getProductTitle.js";
import { vi, expect, test, assert } from "vitest";


getProductTitle(1);

test.each([
  { id: 1, jsonData: '{"title":"Yo"}', expected: "Yo", message: "Should return Yo" },
])("ProductTitleTest : $message", async ({ id, jsonData, expected }) => {
  const remplacementFetch = vi.fn(async () => {
    return {
      json: () => {
        let jsonresponse = JSON.parse(jsonData)
        return jsonresponse;
      }
    }
  })

  vi.stubGlobal('fetch', remplacementFetch)

  expect(await getProductTitle(id)).toBe(expected);
  
  expect(remplacementFetch).toHaveBeenCalledWith(`https://dummyjson.com/products/`+id+`/`)
});

test("Should throw error if fetch experiences network error", async () => {
  const remplacementFetch = vi.fn(async () => {
    return Promise.reject("Network error")
  })

  vi.stubGlobal('fetch', remplacementFetch)

  expect(getProductTitle(1)).rejects.toThrow('Failed to fetch product');
  
  expect(remplacementFetch).toHaveBeenCalledWith(`https://dummyjson.com/products/`+1+`/`)

  vi.unstubAllGlobals()
});

test("Should handle empty json", async () => {
  const remplacementFetch = vi.fn(async () => {
    return {
      json: () => {
        let jsonresponse = JSON.parse('{}')
        return jsonresponse;
      }
    }
  })

  vi.stubGlobal('fetch', remplacementFetch)

  expect(await getProductTitle(1)).toBe(undefined);
  
  expect(remplacementFetch).toHaveBeenCalledWith(`https://dummyjson.com/products/`+1+`/`)

  vi.unstubAllGlobals()
});