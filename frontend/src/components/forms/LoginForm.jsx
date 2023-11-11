import { Button, Link, Box } from "@mui/material";
import { Formik, Form } from "formik";
import { LoginSchema } from "../../schemas";
import InputText from "../form-controls/InputText";
import InputPassword from "../form-controls/InputPassword";
import { Link as RouterLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

function LoginForm() {
  const { login } = useAuthContext();
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => login(values, actions)}
      >
        {(props) => (
          <Form>
            <InputText label="Email" name="email" />
            <InputPassword label="Password" name="password" />
            <Button
              fullWidth
              color="primary"
              variant="contained"
              type="submit"
              size="large"
              sx={{ mt: 4, mx: "auto", display: "block" }}
              disabled={props.isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Link component={RouterLink} to="/register">
          Create an account
        </Link>
      </Box>
    </>
  );
}

export default LoginForm;
