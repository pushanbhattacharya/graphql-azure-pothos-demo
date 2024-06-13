import { Board } from "../schema/board";
import { School } from "../schema/school";
import { Student } from "../schema/student";

export const SCHOOLS: School[] = [
  {
    age: 50,
    board: Board.WB,
    id: "123",
    medium: "English",
    name: "Hello School 1",
  },
  {
    age: 15,
    board: Board.ICSE,
    id: "456",
    medium: "English",
    name: "Hello School 22",
  },
];

export const STUDENTS: Student[] = [
  {
    id: "1",
    age: 10,
    name: "Abc Test",
    sex: "M",
    school: SCHOOLS[0],
  },
  {
    id: "2",
    age: 9,
    name: "Xyz Test",
    sex: "F",
    school: SCHOOLS[1],
  },
];
