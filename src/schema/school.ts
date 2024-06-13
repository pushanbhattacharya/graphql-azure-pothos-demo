import { SCHOOLS } from "../seeds/seedData";
import { Board } from "./board";
import { builder } from "../helper/schema/builder";

export interface School {
  id: string;
  name: string;
  age: number;
  medium: string;
  board: Board;
}

builder.objectType("School", {
  fields: (t) => ({
    id: t.exposeID("id"),
    age: t.exposeInt("age"),
    name: t.exposeString("name"),
    board: t.exposeString("board"),
    medium: t.exposeString("medium"),
  }),
});

builder.queryField("schools", (sch) =>
  sch.field({
    nullable: true,
    description: "Get all the schools",
    args: {
      id: sch.arg.id({
        required: true,
        description: "the id of the school you want to fetch",
      }),
    },
    type: "School",
    resolve: (parent, id) => {
      return SCHOOLS.find((s) => s.id === id.id);
    },
  }),
);
