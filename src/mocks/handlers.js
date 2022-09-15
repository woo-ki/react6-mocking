import { rest } from "msw";

export const handlers = [
    rest.get("/api/user-name", async (req, res, ctx) => {
        const id = req.url.searchParams.get("id");
        return res(
            // ctx.status(403),
            ctx.json({
                name: id === "1" ? "the one" : "the others"
            })
        )
    }),
    rest.get("/todo", async (req, res, ctx) => {
        return res(
            ctx.json({
                todo: {
                    task: "Todo from Server"
                }
            })
        )
    }),
    rest.put("/counter/increment", async (req, res, ctx) => {
        const {value} = req.body;
        console.log(req.json(), req.body);
        return res(
            ctx.json({
                value: value + 2
            })
        )
    }),
    rest.get("/login", async (req, res, ctx) => {
        return res(
            ctx.json({
                id: "hello",
                firstName: "영욱",
                lastName: "김"
            })
        );
    }),
    rest.get("https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json", async (req, res, ctx) => {
        // const id = req.url.searchParams.get("id");
        //
        // const originalRes = await ctx.fetch(req);
        // const originalResData = await originalRes.json();
        return res(
            ctx.status(403),

            ctx.json({
                errorMessage: "Data not Found"
            })
            // ctx.json({
            //     "data": {
            //         "people" :
            //             [
            //                 ...originalResData.data.people,
            //                 {
            //                     "name": id,
            //                     "age": 30
            //                 },
            //             ]
            //     }
            // })
        );
    }),
]