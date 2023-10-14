import { IContactForm } from "../../models";
import { HttpClient } from "../HTTPClients";

export class StudentService extends HttpClient {
  constructor() {
    // super("http://localhost:3001");
    // super("https://localhost:7046");
    super("http://kazimov11-001-site1.itempurl.com");
  }

  async getStudentGrades(id: number) {
    return await this.get(`api/grade/${id}`);
  }

  async getStudentAttance(id: number) {
    return await this.get(`api/attance/${id}`);
  }

  async postContactForm(body: IContactForm) {
    return await this.post(`api/contactform`, body);
  }
}
