import { UserAuthService } from "./Auth";
import { StudentService } from "./Student";
import { TeacherService } from "./Teacher";
import { UserService } from "./User";

export const useService = () =>{
    const services = {
        userAuthService: new UserAuthService(),
        userService:new UserService(),
        studentService:new StudentService(),
        teacherService:new TeacherService()
    };

    return services;
};