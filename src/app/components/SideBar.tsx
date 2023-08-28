import React from "react";
import "./sidebar.scss";
import { ILoginnedStudent } from "../../models";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/consts";
import CampaignIcon from '@mui/icons-material/Campaign';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useUserContext } from "../../hooks";

const SideBar = () => {
  const [loginnedUserInfo, setLoginnedUserInfo] =
  React.useState<ILoginnedStudent>();
  const {sideBarIsOpen} = useUserContext();
 const navigate = useNavigate();

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setLoginnedUserInfo(JSON.parse(user));
  }, []);

  return (
    <div className={sideBarIsOpen?"sideBar":"sideBar w-1"}>
      <div className="userInfo">
        <img src={loginnedUserInfo?.img} alt="profile" />
        <p className={sideBarIsOpen?"":"d-none"}>{loginnedUserInfo?.firstName+" "+loginnedUserInfo?.surName}</p>
      </div>
      <div className="menuInfo">
        <ul>
            <li>
                <HomeIcon className="icon" />
                <p className={sideBarIsOpen?"":"d-none"} onClick={()=>navigate(ROUTES.STUDENT.MAIN_PAGE)}>Ana Səhifə</p>
            </li>
            <li>
                <CampaignIcon className="icon" />
                <p className={sideBarIsOpen?"":"d-none"} onClick={()=>navigate(ROUTES.STUDENT.ANOUNCE_PAGE)}>Elanlar</p>
            </li>
            <li>
                <LibraryBooksIcon className="icon" />
                <p className={sideBarIsOpen?"":"d-none"} onClick={()=>navigate(ROUTES.STUDENT.PROGRAMS_PAGE)}>Kafedra və Programlar</p>
            </li>
            <li>
                <ContactSupportIcon className="icon" />
                <p className={sideBarIsOpen?"":"d-none"} onClick={()=>navigate(ROUTES.STUDENT.CONTACT_PAGE)}>Əlaqə</p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
