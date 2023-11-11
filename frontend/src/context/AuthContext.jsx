import { createContext, useContext, useState } from "react";
import useHttpRequest from "../hooks/useHttpRequest";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { post } = useHttpRequest();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (values, actions) => {
    await post("auth/login", values, actions)
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login }}>
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
