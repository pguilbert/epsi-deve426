import { getProductTitle } from "../functions/getProductTitle";
import { expect, test, vi } from "vitest";

function fakeFetch() {
    return {json: () => {return {id: 1,  title: "Essence Mascara Lash Princess"}}
}}


test("title name by id", async () => {
    vi.stubGlobal('fetch', vi.fn(fakeFetch))
    expect(await getProductTitle(1)).toBe("Essence Mascara Lash Princess")
})