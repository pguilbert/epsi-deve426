import { add } from "../functions/add.js";
import { expect, test } from "vitest";
import { getProductTitle } from "../functions/getProductTitle.js";
import { vi } from 'vitest'


const mockFetch = vi.fn((url) => {
    return {
        json: () => ({ title: 'iPhone 9' }),
    };
});

test("verify ID", async () => {


    vi.stubGlobal('fetch', mockFetch);


    expect(await getProductTitle(1)).toBe("iPhone 9");
    expect(mockFetch).toHaveBeenCalledWith('https://dummyjson.com/products/1/');
});