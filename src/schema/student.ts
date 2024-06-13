import { STUDENTS } from "../seeds/seedData";
import { builder } from "../helper/schema/builder";
import { School } from "./school";

export interface Student {
  id: string;
  name: string;
  sex: "M" | "F" | "O";
  age: number;
  school: School;
}

builder.objectType("Student", {
  fields: (t) => ({
    id: t.exposeID("id"),
    age: t.exposeInt("age"),
    name: t.exposeString("name"),
    sex: t.exposeString("sex"),
    school: t.field({
      type: "School",
      resolve: (stu) => stu.school,
    }),
  }),
});

builder.queryField("students", (stu) =>
  stu.field({
    nullable: true,
    description: "Get all the students",
    args: {
      id: stu.arg.id({
        required: true,
        description: "the id of the student you want to fetch",
      }),
    },
    type: "Student",
    resolve: (parent, id) => {
      return STUDENTS.find((s) => s.id === id.id);
    },
  }),
);
