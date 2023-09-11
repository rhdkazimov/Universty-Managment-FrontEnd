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
import { UserProvider } from "../context/UserContext";
import { Announce } from "../app/Student/Announcement";
import ProgramsList from "../app/User/Programs";
import FacultyProgram from "../app/User/Programs/FacultyProgram";
import Grades from "../app/Student/Grades";
import Attance from "../app/Student/Attance";
import Contact from "../app/User/Contact";
import { ProtectedStudentRouter } from "../app/components/ProtectedStudentRouter";
import { ProtectedTeacherRouter } from "../app/components/ProtectedTeacherRouter";
import { TeacherInfo } from "../app/Teacher/Home";
import StudentsGradesNote from "../app/Teacher/Grades/StudentsGradesNote";
import TeacherGroups from "../app/Teacher/Groups";
import GroupAttance from "../app/Teacher/Attance";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.USER.LOGIN}
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
          <ProtectedStudentRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <StudentInfo />
              </div>
            </UserProvider>
          </ProtectedStudentRouter>
        }
      />
      <Route
        path={ROUTES.USER.ANOUNCE_PAGE}
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
        path={ROUTES.USER.PROGRAMS_PAGE}
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
        path={ROUTES.USER.FACULTY_PROGRAMS_PAGE}
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
          <ProtectedStudentRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <Grades />
              </div>
            </UserProvider>
          </ProtectedStudentRouter>
        }
      />
      <Route
        path={ROUTES.STUDENT.ATTANCE}
        element={
          <ProtectedStudentRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <Attance />
              </div>
            </UserProvider>
          </ProtectedStudentRouter>
        }
      />
      <Route
        path={ROUTES.USER.CONTACT_PAGE}
        element={
          <ProtectedRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <Contact />
              </div>
            </UserProvider>
          </ProtectedRouter>
        }
      />
      <Route
        path={ROUTES.TEACHER.MAIN_PAGE}
        element={
          <ProtectedTeacherRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <TeacherInfo />
              </div>
            </UserProvider>
          </ProtectedTeacherRouter>
        }
      />
      <Route
        path={ROUTES.TEACHER.TEACHER_GROUPS}
        element={
          <ProtectedTeacherRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <TeacherGroups />
              </div>
            </UserProvider>
          </ProtectedTeacherRouter>
        }
      />
      <Route
        path={ROUTES.TEACHER.CHECK_STUDENTS_GRADES}
        element={
          <ProtectedTeacherRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <StudentsGradesNote />
              </div>
            </UserProvider>
          </ProtectedTeacherRouter>
        }
      />
      <Route
        path={ROUTES.TEACHER.CHECK_ATTANCE}
        element={
          <ProtectedTeacherRouter>
            <UserProvider>
              <Navbar />
              <div className="flex">
                <SideBar />
                <GroupAttance />
              </div>
            </UserProvider>
          </ProtectedTeacherRouter>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
