import { IContactForm } from "../../models";
import { HttpClient } from "../HTTPClients";

export class StudentService extends HttpClient {
  constructor() {
    super("http://localhost:3001");
  }

  async getStudentGrades(id: string) {
    return await this.get(`grades/${id}`);
  }

  async getStudentAttance(id: string, semester: string) {
    return await this.get(`attance/${id}/${semester}`);
  }

  async postContactForm(body: IContactForm) {
    const localStudent = localStorage.getItem("user");
    if (localStudent) {
      const student = JSON.parse(localStudent);
      return await this.post(`contact/support/${student.studentID}`, body);
    }
  }
}
