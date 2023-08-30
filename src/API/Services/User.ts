import {  IAnnounceInfo, ILoginUser } from "../../models";
import { HttpClient } from "../HTTPClients";

export class UserService extends HttpClient{
    constructor() {
        super("http://localhost:3001");
    }


   
    async getAllAnnounce (){
        return await this.get(`AllAnnounces`)
    }

    async logout() {
        return await this.get('/logout').then(()=>{
            localStorage.clear();
        })
    }
} 