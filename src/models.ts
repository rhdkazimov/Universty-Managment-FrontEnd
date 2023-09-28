export interface ILoginUser {
  id: number;
  password: string;
}

export interface ILoginnedStudent {
  type: string;
  id: number;
  password: string;
  firstName: string;
  surName: string;
  birthday: string;
  mail: string;
  faculty: string;
  specialty: string;
  language: string;
  includeYear: number;
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
  birthday: string;
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
  id: number;
  name: string;
  code: string;
  lessons: ISectionProgramsFor[];
}

export interface ISectionProgramsFor {
  id: number;
  name: string;
}

export interface IStudentGrades {
  id: number;
  sdF1: number;
  sdF2: number;
  sdF3: number;
  tsi: number;
  ssi: number;
  ort: number;
  student: IStudentInfoInStudentGrades;
  lesson:ILessonInfoInStudentGrades
}

export interface IStudentInfoInStudentGrades{
  id:number;
  firstName:string;
  surName:string;
}

export interface ILessonInfoInStudentGrades{
  id:number;
  name:string
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
  contact:string
}

export interface IStudentAttanceData {
  id: number;
  name: string;
  teacher: string;
  time: number;
  plus: number;
  absance: number;
  percentage: number;
}

export interface ITeacherGroups {
  id: number;
  group: ITeacherGroupsGroup;
  lesson: ITeacherGroupsLesson;
}

export interface ITeacherGroupsLesson {
  id: number;
  name: string;
}

export interface ITeacherGroupsGroup {
  id: number;
  groupCode: string;
  studentsCount: number;
}

export interface IGroupInfo {
  groupCode: string;
  lessonName: string;
  students: IGroupStudents[];
}

export interface IGroupStudents {
  id: number;
  firstName: string;
  surName: string;
  sdF1: number;
  sdF2: number;
  sdF3: number;
  tsi: number;
  ssi: number;
  ort: number;
}

export interface IGroupStudentAttance {
  studentId: number;
  firstName: string;
  surName: string;
  attance: IStudentAttanceForTeacher[];
}

export interface IStudentAttanceForTeacher {
  dvm: string;
}
