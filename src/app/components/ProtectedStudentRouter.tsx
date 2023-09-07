import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../routes/consts";

interface IProps {
  children: JSX.Element;
}

export const ProtectedStudentRouter: React.FC<IProps> = ({ children }) => {
  const localUser = localStorage.getItem("user");
  if (localStorage.getItem("token") && localUser) {
    const user = JSON.parse(localUser);
    if (user.type === "student") return children;
    else return <Navigate to={ROUTES.USER.ANOUNCE_PAGE} />;
  }
  return <Navigate to={ROUTES.USER.LOGIN} />;
};
