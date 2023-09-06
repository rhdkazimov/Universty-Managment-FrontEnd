import React from "react";
import { useService } from "../API/Services";
import { ILoginUser } from "../models";
import { useMutation, UseMutateAsyncFunction } from "react-query";

interface IUserAuthContext {
  mutateLoginUserApplication: UseMutateAsyncFunction<
    void,
    unknown,
    ILoginUser,
    unknown
  >;
  isLoginLoading: boolean;
  setUserData:React.Dispatch<React.SetStateAction<any>>;
  userData:any;
}

export const UserAuthContext = React.createContext<IUserAuthContext>(null as any);

export const UserAuthProvider: React.FC<any> = ({ children }) => {
  const { userAuthService } = useService();
  const [userData,setUserData] = React.useState();

  const { mutateAsync: mutateLoginUserApplication, isLoading: isLoginLoading } =
    useMutation((requestBody: ILoginUser) => {
     return userAuthService.loginUser(requestBody).then().catch((err)=>console.log(err)
     )
    }
    );

  return (
    <UserAuthContext.Provider
      value={{ mutateLoginUserApplication, isLoginLoading,userData,setUserData }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};