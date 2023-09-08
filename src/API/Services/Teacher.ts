import { IGroupInfo } from "../../models";
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

  async saveStudentsGrade(id: string, body: IGroupInfo) {
    return await this.post(`grade-note/${id}`, body);
  }
}
