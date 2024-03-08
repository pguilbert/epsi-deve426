import { clamp } from "../functions/clamp.js";
import { expect, it } from "vitest";


it("should work without a max limit", ()=>{

expect(clamp(5,0)).toBe(0);
});


it("should clamp negative number", ()=>{

expect(clamp(0,-1,10)).toBe(0);
})

it("should clamp positive number", ()=>{

expect(clamp(2,5,10)).toBe(5);
})

it("should not alter negative numbers in range", ()=>{

expect(clamp(-5,-4,3)).toBe(-4);
})


it("should not alter positive numbers in range", ()=>{

expect(clamp(-5,0,4)).toBe(0);
})
it("should not alter `0` in range", ()=>{

expect(clamp(0,0,0)).toBe(0);
})