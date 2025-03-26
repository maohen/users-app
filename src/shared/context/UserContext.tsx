import { createContext, ReactNode, useContext, useState } from "react";
import { IUser } from "./interfaces/users";
import { IParams } from "./interfaces/params";


interface userContextType {
  users: IUser[];
  handleSetUser: (user:IUser[]) => void;
  params: IParams;
  handleSetParams: (values:IParams) => void;
}

const defaultContextValue: userContextType = {
  users: [],
  handleSetUser: ()=> {},
  params: {
    page:1,
    results: 50,
    totalElements: 1000
  },
  handleSetParams: ()=> {},
};

const UserContext = createContext<userContextType>(defaultContextValue);

interface userProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<userProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [params, setParams] = useState<IParams>(defaultContextValue.params)

  const handleSetUser = (user: IUser[]) => {
    setUsers(user);
  };

  const handleSetParams = (values: IParams) => {
    setParams(values);
  };

  return (
    <UserContext.Provider value={{ users, handleSetUser, params, handleSetParams }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
    return useContext(UserContext);
};

