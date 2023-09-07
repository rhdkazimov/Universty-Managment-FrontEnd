import { IAnnounceInfo, ILoginUser } from "../../models";
import { HttpClient } from "../HTTPClients";

export class UserService extends HttpClient {
  constructor() {
    super("http://localhost:3001");
  }

  async getAllAnnounce() {
    return await this.get(`AllAnnounces`);
  }

  async getAllPrograms() {
    return await this.get(`AllPrograms`);
  }

  async getProgramByCode(code: string) {
    return await this.get(`Program/${code}`);
  }

  async logout() {
    return await this.get("/logout").then(() => {
      localStorage.clear();
    });
  }

  async getUniverstyData() {
    return await this.get(`system-settings-data`);
  }
}
