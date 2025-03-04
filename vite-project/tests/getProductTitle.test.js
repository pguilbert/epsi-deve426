import { getProductTitle } from "../functions/getProductTitle.js";
import { expect, test, vi } from "vitest";


test("getProductTitle", async () => {
    vi.stubGlobal('fetch', () => {
        return {
            json: () => {
                return {
                    title: "123",
                }
            }
        }
    });
    expect(await getProductTitle(1)).toBe("123");
});

