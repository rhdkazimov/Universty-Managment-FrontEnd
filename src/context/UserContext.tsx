import React from "react";
interface IUserContext {
  setSideBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sideBarIsOpen: boolean;
  userType:string|undefined;
}

export const UserContext = React.createContext<IUserContext>(null as any);

export const UserProvider: React.FC<any> = ({ children }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = React.useState(true);
  const [userType, setUserType] = React.useState<string>();

  const localUser = localStorage.getItem("user");

  React.useEffect(() => {
    if (localUser) {
      setSideBarIsOpen(JSON.parse(localUser).type);
    }
  }, []);

  return (
    <UserContext.Provider value={{ setSideBarIsOpen, sideBarIsOpen,userType }}>
      {children}
    </UserContext.Provider>
  );
};
