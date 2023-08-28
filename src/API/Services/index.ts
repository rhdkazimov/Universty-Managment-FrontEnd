import { UserAuthService } from "./Auth";

export const useService = () =>{
    const services = {
        userAuthService: new UserAuthService(),
    };

    return services;
};