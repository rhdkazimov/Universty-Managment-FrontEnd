import { IGroupInfo, IGroupStudentAttance, IGroupStudents } from "../../models";
import { HttpClient } from "../HTTPClients";

export class TeacherService extends HttpClient {
  constructor() {
    super("http://localhost:3001");
  }

  async getTeachersGroup(id: string) {
    return await this.get(`groups/${id}`);
  }
  async getGroupStudents(id: string) {
    return await this.get(`group/students/${id}`);
  }

  async saveStudentsGrade(id: string, body: IGroupStudents[]) {
    return await this.post(`grade-note/${id}`, body);
  }

  async getGroupStudentAttance(id: string) {
    return await this.get(`group/attance/${id}`);
  }

  async saveStudentsAttance(id: string, body: IGroupStudentAttance[]) {
    return await this.post(`group/save/attance/${id}`, body);
  }

}
