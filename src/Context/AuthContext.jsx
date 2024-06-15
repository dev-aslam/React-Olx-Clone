import { useContext, useState, createContext } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "isLogin",
    "user_name",
  ]);
  const [user_name, setName] = useState(() => cookies.user_name || "");
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const isLogin = cookies.isLogin;
    return isLogin ? true : false;
  });

  const setIsLoggedInFunc = (isLogState, name = "") => {
    setIsLoggedIn(isLogState);
    setName(name);
    if (value) {
      setCookie("isLogin", true);
      setCookie("user_name", name);
    } else {
      removeCookie("isLogin");
      removeCookie("user_name");
    }
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn: setIsLoggedInFunc,
    user_name,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
