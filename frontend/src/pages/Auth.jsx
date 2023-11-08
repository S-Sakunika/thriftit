import { Box } from "@mui/material";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import { useLocation } from "react-router-dom";

function Auth() {
  const { pathname } = useLocation();
  const slug = pathname.split("/")[1];
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        minHeight: (theme) => theme.page.minHeight,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "30vw" }}>
        {slug === "login" ? <LoginForm /> : <RegisterForm />}
      </Box>
    </Box>
  );
}

export default Auth;
