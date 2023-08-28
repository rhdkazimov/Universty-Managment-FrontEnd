import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./consts";
import { NotFound } from "../app/components/NotFound";
import { ProtectedLoginRouter } from "../app/components/ProtectedLoginRouter";
import { Login } from "../app/Auth";
import { UserAuthProvider } from "../context/UserAuthContext";
import { ProtectedRouter } from "../app/components/ProtectedRouter";
import { StudentInfo } from "../app/Student";
import Navbar from "../app/components/Navbar";
import SideBar from "../app/components/SideBar";
import { UserContext, UserProvider } from "../context/UserContext";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.STUDENT.LOGIN}
        element={
          <ProtectedLoginRouter>
            <UserAuthProvider>
              <Login />
            </UserAuthProvider>
          </ProtectedLoginRouter>
        }
      />
      <Route
        path={ROUTES.STUDENT.MAIN_PAGE}
        element={
          <ProtectedRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
              <SideBar />
              <StudentInfo />
              </div>
            </UserProvider>
          </ProtectedRouter>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
