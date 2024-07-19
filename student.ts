import students from "./data";
import { Student } from "./interfaces";

export const getAllStudents = (): Student[] => {
  return students;
};

export const getOnsiteStudents = (): Student[] => {
  const result = students.filter(
    (student: Student): boolean => student.isOnsiteAllowed
  );
  return result;
};

export const getStudent = (rollNo: number): Student | undefined => {
  const foundUser = students.find(
    (student: Student): boolean => student.rollNo === rollNo
  );
  return foundUser;
};

export const isStudentOnSite = (rollNo: number): boolean => {
  const foundUser = students.find(
    (student: Student): boolean =>
      student.rollNo === rollNo && student.isOnsiteAllowed
  );

  if (foundUser) {
    return true;
  } else {
    return false;
  }
};


// todo for students: get entry test passed students list
// create function that return entry test passed students array of objects