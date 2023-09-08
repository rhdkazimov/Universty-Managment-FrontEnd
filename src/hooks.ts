import React from "react";
import { UserAuthContext } from "./context/UserAuthContext";
import { UserContext } from "./context/UserContext";

export const useUserAuthicantion = () => React.useContext(UserAuthContext)
export const useUserContext = () => React.useContext(UserContext)
