import SchemaBuilder from "@pothos/core";
import { School } from "../../schema/school";
import { Student } from "../../schema/student";

export const builder = new SchemaBuilder<{
  Objects: {
    Student: Student;
    School: School;
  };
  Scalars: {
    ID: { Input: string; Output: string };
  };
}>({});

// You will still need to define the `Query` type somewhere in your schema to add individual query fields
builder.queryType({});
