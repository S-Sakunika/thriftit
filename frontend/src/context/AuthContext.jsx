import { createContext, useContext } from "react";
import useHttpRequest from "../hooks/useHttpRequest";
import { useNavigate } from "react-router-dom";
import { useNotificationContext } from "../context/NotificationContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { post, get } = useHttpRequest();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user") ? true : false;
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  const { setNotifications } = useNotificationContext();

  const login = async (values, actions) => {
    await post("auth/login", values, actions)
      .then((res) => {
        const result = res.data.result;
        localStorage.setItem("auth_token", result.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            _id: result.user._id,
            firstName: result.user.firstName,
            lastName: result.user.lastName,
            email: result.user.email,
            role: result.user.role,
          })
        );
        navigate("/my-account/profile");
      })
      .catch((e) => {});
  };

  const getUser = async (redirectToLogin) => {
    await get("user", redirectToLogin)
      .then((res) => {
        const result = res.data.result;
        localStorage.setItem(
          "user",
          JSON.stringify({
            _id: result.user._id,
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.email,
            role: result.role,
          })
        );
      })
      .catch((e) => {});
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    setTimeout(() => {
      setNotifications({
        open: true,
        status: "success",
        messages: "Logged out successfully",
      });
    }, 500);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, getUser, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthContext };
