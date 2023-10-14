import { IGroupStudentAttance, IGroupStudents } from "../../models";
import { HttpClient } from "../HTTPClients";

export class TeacherService extends HttpClient {
  constructor() {
    // super("https://localhost:7046");
    super("http://kazimov11-001-site1.itempurl.com");
    // super("http://localhost:3001");
  }

  async getTeachersGroup(id: string) {
    return await this.get(`api/teacher/groups/${id}`);
  }
  async getGroupStudents(id: string, lessonId: string) {
    return await this.get(`api/teacher/group/students/${id}/${lessonId}`);
  }

  async saveStudentsGrade(id: string, body: IGroupStudents[]) {
    return await this.put(`api/grade/lesson/${id}`, body);
  }

  async getGroupStudentAttance(id: number, lessonId: number) {
    return await this.get(`api/attance/group/${id}/${lessonId}`);
  }

  async saveStudentsAttance(
    id: number,
    lessonId: number,
    body: IGroupStudentAttance[]
  ) {
    return await this.put(`api/attance/group/${id}/${lessonId}`, body);
  }
}
