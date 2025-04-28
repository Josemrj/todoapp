// src/context/LoginContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface ILoginContext {
  isAuth: boolean;
  checkLoginStateAsync: () => Promise<boolean>;
}

const LoginContext = createContext<ILoginContext>({
  isAuth: false,
  checkLoginStateAsync: async () => false,
});

export const LoginProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const checkLoginStateAsync = async (): Promise<boolean> => {
    return isAuth;
  };

  return (
    <LoginContext.Provider value={{ isAuth, checkLoginStateAsync }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
export default LoginContext;
