import axios from "axios";
import { createContext, useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuthStatus = useCallback(() => {
    const token = localStorage.getItem("Refresh Token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    checkAuthStatus();
    const interval = setInterval(checkAuthStatus, 10000);
    return () => clearInterval(interval);
  }, [checkAuthStatus]);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = async () => {
    const Refresh = localStorage.getItem("Refresh Token");
    const res = await axios.post(
      "https://2e5a-125-21-249-98.ngrok-free.app/main/logout/",
      { refresh: Refresh },
      {
        withCredentials: true,
      }
    );
    if (res.status === 200) {
      localStorage.removeItem("Refresh Token");
      setIsLoggedIn(false);
      toast.error("Successfully Logged out", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, checkAuthStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
