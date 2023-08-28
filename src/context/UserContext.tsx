import React from "react";
interface IUserContext {
  setSideBarIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
  sideBarIsOpen:boolean;
}

export const UserContext = React.createContext<IUserContext>(null as any);

export const UserProvider: React.FC<any> = ({ children }) => {
  const [sideBarIsOpen,setSideBarIsOpen] = React.useState(true);
 
  return (
    <UserContext.Provider
      value={{setSideBarIsOpen,sideBarIsOpen}}
    >
      {children}
    </UserContext.Provider>
  );
};

