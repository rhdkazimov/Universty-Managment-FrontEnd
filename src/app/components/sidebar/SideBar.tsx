import React from "react";
import "./sidebar.scss";
import { ILoginnedStudent } from "../../../models";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/consts";
import CampaignIcon from "@mui/icons-material/Campaign";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import GradingIcon from "@mui/icons-material/Grading";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { useUserContext } from "../../../hooks";

const SideBar = () => {
  const [loginnedUserInfo, setLoginnedUserInfo] =
    React.useState<ILoginnedStudent>();
  const { sideBarIsOpen, userType } = useUserContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setLoginnedUserInfo(JSON.parse(user));
  }, []);

  return (
    <div className={sideBarIsOpen ? "sideBar" : "sideBar w-1"}>
      <div className="userInfo">
        <img src={loginnedUserInfo?.img} alt="profile" />
        <p className={sideBarIsOpen ? "" : "d-none"}>
          {loginnedUserInfo?.firstName + " " + loginnedUserInfo?.surName}
        </p>
      </div>
      <div className="menuInfo">
        <ul>
          <li
            onClick={() => {
              loginnedUserInfo?.type === "student"
                ? navigate(ROUTES.STUDENT.MAIN_PAGE)
                : navigate(ROUTES.TEACHER.MAIN_PAGE);
            }}
          >
            <HomeIcon className="icon" />
            <p className={sideBarIsOpen ? "" : "d-none"}>Ana Səhifə</p>
          </li>
          <li onClick={() => navigate(ROUTES.USER.ANOUNCE_PAGE)}>
            <CampaignIcon className="icon" />
            <p className={sideBarIsOpen ? "" : "d-none"}>Elanlar</p>
          </li>
          <li onClick={() => navigate(ROUTES.USER.PROGRAMS_PAGE)}>
            <LibraryBooksIcon className="icon" />
            <p className={sideBarIsOpen ? "" : "d-none"}>
              Kafedra və Programlar
            </p>
          </li>
          <li
            onClick={() => {
              loginnedUserInfo?.type === "student"
                ? navigate(ROUTES.STUDENT.GRADES)
                : navigate(ROUTES.TEACHER.TEACHER_GROUPS);
            }}
          >
            <GradingIcon className="icon" />
            <p className={sideBarIsOpen ? "" : "d-none"}>
              {loginnedUserInfo?.type === "student"
                ? "Qiymət Cədvəli"
                : "Qruplar"}
            </p>
          </li>
          <li
            className={loginnedUserInfo?.type === "student" ? "" : "d-none"}
            onClick={() => navigate(ROUTES.STUDENT.ATTANCE)}
          >
            <EditCalendarIcon className="icon" />
            <p className={sideBarIsOpen ? "" : "d-none"}>Elektron Jurnal</p>
          </li>
          <li onClick={() => navigate(ROUTES.USER.CONTACT_PAGE)}>
            <ContactSupportIcon className="icon" />
            <p className={sideBarIsOpen ? "" : "d-none"}>Əlaqə</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
