import { IAnnounceInfo, ILoginUser } from "../../models";
import { HttpClient } from "../HTTPClients";

export class UserService extends HttpClient {
  constructor() {
    // super("http://localhost:3001");
    // super("https://localhost:7046");
    super("http://kazimov11-001-site1.itempurl.com");
  }

  async getAllAnnounce() {
    return await this.get(`api/Announce/all`);
  }

  async getAllPrograms() {
    return await this.get(`api/faculty/programs`);
  }

  async getProgramByCode(id: number) {
    return await this.get(`api/faculty/programs/${id}`);
  }

  async logout() {
    return await this.get("api/user/logout").then(() => {
      localStorage.clear();
    });
  }

  async getUniverstyData() {
    return await this.get(`api/settings/all`);
  }
}
