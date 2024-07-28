import axios from "axios";
import { createContext, useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import axiosInstance from "../API/axiosConfig";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuthStatus = useCallback(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // const navigate = useNavigate(); // Ensure this is within a Router context

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("token", "your-token-here"); // Update with actual token logic
  };

  const logout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("token");
        const refreshToken = localStorage.getItem("refresh");

        if (!token || !refreshToken) {
          throw new Error("No token found");
        }

        const response = await axiosInstance.post("/main/logout/", {
          refresh: refreshToken,
        });

        if (response.status === 200) {
          localStorage.removeItem("token");
          localStorage.removeItem("refresh");
          setIsLoggedIn(false);
          // navigate("/");
          Swal.fire({
            title: "Logged out!",
            text: "You have been logged out successfully.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Logout failed",
            text: "An error occurred during logout. Please try again.",
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "An error occurred during logout. Please try again.",
          icon: "error",
        });
      }
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
