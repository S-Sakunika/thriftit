import { createContext, useContext, useState } from "react";
import useHttpRequest from "../hooks/useHttpRequest";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { post, get } = useHttpRequest();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (values, actions) => {
    await post("auth/login", values, actions)
      .then((res) => {
        localStorage.setItem("auth_token", res.data.result.token);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((e) => {
        setIsLoggedIn(false);
      });
  };

  const getUser = async (redirectToLogin) => {
    await get("user", redirectToLogin)
      .then((res) => {
        setIsLoggedIn(true);
      })
      .catch((e) => {
        setIsLoggedIn(false);
      });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, getUser }}>
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
