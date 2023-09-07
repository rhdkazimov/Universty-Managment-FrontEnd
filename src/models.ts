export interface ILoginUser {
    userName:string,
    password:string
}

export interface ILoginnedStudent {
    studentID:string,
    password:string,
    firstName:string,
    surName:string,
    birthDay: string,
    mail:string,
    faculty:string,
    specialty:string,
    language:string,
    includedYear:number,
    academicHelper:string,
    status:boolean,
    perYear:number,
    includePoint:number,
    stateOrdered:boolean,
    img:string,
}

export interface IAnnounceInfo{
    headerInfo:string,
    mainInfo:string,
    date:string
}

export interface IPrograms{
    sectionCode:string,
    sectionName:string,
    sectionLessons:string[],
    sectionsProgramsForYear:ISectionProgramsFor[]
}

export interface ISectionProgramsFor {
    year:number,
    code:number,
    lang:string,
    programName:string,
    faculty:string
}


export interface IStudentGrades {
    years:string,
    semester:number,
    grades:IStudentGradesInfo[]
}

export interface IStudentGradesInfo{
    lessonCode:string,
    lessonName:string,
    SDF1:number,
    SDF2:number,
    SDF3:number,
    TSI:number,
    SSI:number,
    ORT:number
}

export interface IContactForm {
    header:string,
    text:string
}