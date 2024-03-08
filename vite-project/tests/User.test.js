import { describe,expect } from "vitest";
import { getUserById } from "../functions/getUsers";
import {sql} from "../internal/sql"
import {vi, it} from "vitest";

vi.mock("../internal/sql.js", ()=>({

    sql: vi.fn(function(strings, ... values)  {

        const query = strings.reduce(
            (acc, str, i) => acc + str + (values[i] || ""),
            ""

        );

        return { text: query};

    }),

}));

describe("getUserById" , ()=>{
    it ("works!", ()=>{
        const user = getUserById(1);
        expect(sql).toReturn({text: "SELECT * FROM USER WHERE Id = 1 "});
    });
});