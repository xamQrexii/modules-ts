import  {getAllStudents, getOnsiteStudents, getStudent, isStudentOnSite} from "./student";

const students = getAllStudents();
console.log('students: ', students);

const onsiteStudents = getOnsiteStudents();
console.log('onsiteStudents: ', onsiteStudents);

const singleStudent = getStudent(2009);
console.log('singleStudent: ', singleStudent);

const singleOnlineStudent = isStudentOnSite(2007);
console.log('singleOnlineStudent: ', singleOnlineStudent);

