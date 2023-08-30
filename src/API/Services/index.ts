import { UserAuthService } from "./Auth";
import { UserService } from "./User";

export const useService = () =>{
    const services = {
        userAuthService: new UserAuthService(),
        userService:new UserService(),
    };

    return services;
};