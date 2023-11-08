import { Button, Link, Box } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputText from "../form-controls/InputText";
import InputPassword from "../form-controls/InputPassword";
import { Link as RouterLink } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().required("Password required"),
});

function LoginForm() {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
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
