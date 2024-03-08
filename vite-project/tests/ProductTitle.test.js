import { getProductTitle } from "../functions/getProductTitle";
import { expect, it } from "vitest";


it('should return the title of the product', async () => {

expect( await getProductTitle(1)).toStrictEqual("iPhone 9");



});   