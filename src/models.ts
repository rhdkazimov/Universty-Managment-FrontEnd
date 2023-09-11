export interface ILoginUser {
  userName: string;
  password: string;
}

export interface ILoginnedStudent {
  type: string;
  id: string;
  password: string;
  firstName: string;
  surName: string;
  birthDay: string;
  mail: string;
  faculty: string;
  specialty: string;
  language: string;
  includedYear: number;
  academicHelper: string;
  status: boolean;
  perYear: number;
  includePoint: number;
  stateOrdered: boolean;
  img: string;
}

export interface ILoginnedTeacher {
  type: string;
  id: string;
  password: string;
  firstName: string;
  surName: string;
  birthDay: string;
  mail: string;
  faculty: string;
  specialty: string;
  language: string;
  includedYear: number;
  img: string;
}

export interface IAnnounceInfo {
  headerInfo: string;
  mainInfo: string;
  date: string;
}

export interface IPrograms {
  sectionCode: string;
  sectionName: string;
  sectionLessons: string[];
  sectionsProgramsForYear: ISectionProgramsFor[];
}

export interface ISectionProgramsFor {
  year: number;
  code: number;
  lang: string;
  programName: string;
  faculty: string;
}

export interface IStudentGrades {
  years: string;
  semester: number;
  grades: IStudentGradesInfo[];
}

export interface IStudentGradesInfo {
  lessonCode: string;
  lessonName: string;
  SDF1: number;
  SDF2: number;
  SDF3: number;
  TSI: number;
  SSI: number;
  ORT: number;
}

export interface IContactForm {
  header: string;
  text: string;
}

export interface IStudentAttanceData {
  code: string;
  name: string;
  teacher: string;
  time: number;
  plus: number;
  absance: number;
  percentage: number;
}

export interface ITeacherGroups {
  groupCode: string;
  studentCounts: number;
  lessonName: string;
}

export interface IGroupInfo {
  groupCode: string;
  lessonName: string;
  students: IGroupStudents[];
}

export interface IGroupStudents {
  name: string;
  surname: string;
  SDF1: number;
  SDF2: number;
  SDF3: number;
  TSI: number;
  SSI: number;
  ORT: number;
}

export interface IGroupStudentAttance {
  id: string;
  name: string;
  surname: string;
  attance: IStudentAttanceForTeacher[];
}

export interface IStudentAttanceForTeacher {
  DVM: string;
}
