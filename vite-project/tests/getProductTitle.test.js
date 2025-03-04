import { getProductTitle } from "../functions/getProductTitle";
import { vi, test, expect } from "vitest";

test("getProductTitle", async () => {
    vi.stubGlobal("fetch", () => {
        return {
            json: () => {
                return {
                    title: "productTitle"
                }
            }
        }
    });
    expect(await getProductTitle("productTitle")).toBe({title: "productTitle"});
});

