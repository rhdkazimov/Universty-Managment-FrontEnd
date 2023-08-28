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