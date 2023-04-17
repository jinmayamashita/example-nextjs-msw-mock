import { rest } from "msw";
import { db, Person } from "./db";

type RequestBody = Omit<Person, "id">;

export const handlers = [
  rest.get("https://reqres.in/api/users", (_req, res, ctx) => {
    return res(
      ctx.json<{ data: Person[] }>({
        data: db,
      })
    );
  }),
  rest.post("https://reqres.in/api/users", async (req, res, ctx) => {
    const reqBody = await req.json<RequestBody>();

    // Check request body for required fields
    if (!["first_name", "last_name", "avatar"].every((key) => key in reqBody))
      return res(ctx.status(400));

    const { first_name, last_name, avatar } = reqBody;

    return res(
      ctx.json<Person>({
        id: db.length.toString(),
        first_name,
        last_name,
        avatar,
      })
    );
  }),
];
