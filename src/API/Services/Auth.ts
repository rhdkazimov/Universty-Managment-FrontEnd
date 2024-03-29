import { ILoginUser } from "../../models";
import { HttpClient } from "../HTTPClients";

export class UserAuthService extends HttpClient {
  constructor() {
    // super("http://localhost:3001");
    // super("https://localhost:7046");
    super("http://kazimov11-001-site1.itempurl.com");
  }

  // async registerUser(body:IUserInfo){
  //     return await this.post(`register`,body)
  // }

  async loginUser(body: ILoginUser) {
    return await this.post(`api/user/login`, body).then(({ data }) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    });
  }

  async logout() {
    return await this.get("api/user/logout").then(() => {
      localStorage.clear();
    });
  }
}
