import { HttpClient } from "../HTTPClients";

export class StudentService extends HttpClient{
    constructor() {
        super("http://localhost:3001");
    }

   
    async getStudentGrades (id:string){
        return await this.get(`grades/${id}`)
    }
   
} 