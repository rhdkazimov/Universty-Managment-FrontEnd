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

