import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";

function Login() {
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
        <LoginForm />
      </Box>
    </Box>
  );
}

export default Login;
