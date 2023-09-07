import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./consts";
import { NotFound } from "../app/components/NotFound";
import { ProtectedLoginRouter } from "../app/components/ProtectedLoginRouter";
import { Login } from "../app/Auth";
import { UserAuthProvider } from "../context/UserAuthContext";
import { ProtectedRouter } from "../app/components/ProtectedRouter";
import { StudentInfo } from "../app/Student/Home";
import Navbar from "../app/components/navbar/Navbar";
import SideBar from "../app/components/sidebar/SideBar";
import { UserContext, UserProvider } from "../context/UserContext";
import { Announce } from "../app/Student/Announcement";
import ProgramsList from "../app/User/Programs";
import FacultyProgram from "../app/User/Programs/FacultyProgram";
import Grades from "../app/Student/Grades";
import Attance from "../app/Student/Attance";

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
      <Route
        path={ROUTES.STUDENT.ANOUNCE_PAGE}
        element={
          <ProtectedRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <Announce />
              </div>
            </UserProvider>
          </ProtectedRouter>
        }
      />
      <Route
        path={ROUTES.STUDENT.PROGRAMS_PAGE}
        element={
          <ProtectedRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <ProgramsList />
              </div>
            </UserProvider>
          </ProtectedRouter>
        }
      />
      <Route
        path={ROUTES.STUDENT.FACULTY_PROGRAMS_PAGE}
        element={
          <ProtectedRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <FacultyProgram />
              </div>
            </UserProvider>
          </ProtectedRouter>
        }
      />
      <Route
        path={ROUTES.STUDENT.GRADES}
        element={
          <ProtectedRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <Grades />
              </div>
            </UserProvider>
          </ProtectedRouter>
        }
      />
      <Route
        path={ROUTES.STUDENT.ATTANCE}
        element={
          <ProtectedRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <Attance />
              </div>
            </UserProvider>
          </ProtectedRouter>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
