import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./navbar.scss";
import { ILoginnedStudent } from "../../../models";
import { Button } from "@chakra-ui/react";
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/consts";
import { useUserContext } from "../../../hooks";

const Navbar = () => {
  const [userInfo, setUserInfo] = React.useState<ILoginnedStudent>();
  const [showUserSetting, setShowUserSetting] = React.useState(false);
  const navigate = useNavigate();
  const {sideBarIsOpen,setSideBarIsOpen} = useUserContext();
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUserInfo(JSON.parse(user));
    console.log(userInfo?.img);
  }, []);

  const handleUserSettings = () => {
    setShowUserSetting(!showUserSetting);
  };

  const handleLogOut = () =>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate(ROUTES.STUDENT.LOGIN)
  }

  const handleAnnounceNav = ()=> navigate(ROUTES.STUDENT.ANOUNCE_PAGE)

  return (
    <div className="container">
      <div className="navbar">
        <div className="menu">
          <div className="text">
            {
            sideBarIsOpen?<p>Tələbə Məlumat Sistemi</p>:<p>TMS</p>
            }
          </div>
          <MenuIcon onClick={()=>setSideBarIsOpen(!sideBarIsOpen)} className="menuicon" />
        </div>
        <div className="user" >
          <MailOutlineIcon onClick={handleAnnounceNav}  className="mail" />
          <div className="image" onClick={handleUserSettings}>
            <img src={userInfo?.img} alt="profile" />
            <p>{userInfo?.firstName + " " + userInfo?.surName}</p>
          </div>
          <SettingsSuggestIcon className="setting" />
          <ul className={showUserSetting?"userInfoSettingNav":"userInfoSettingNav d-none"}>
          <li className="user-header">
                <img src={userInfo?.img} alt="profile" className="img-circle"  title="200115017" />
                <p>{userInfo?.firstName + " " + userInfo?.surName}</p>
              </li>
            <li className="user-footer">
            <Button leftIcon={<LoginIcon />} onClick={handleLogOut} className="userLeftBtn" colorScheme='teal' variant='outline'>
    Çıxış
  </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
