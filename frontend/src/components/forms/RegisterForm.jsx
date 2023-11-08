import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputText from "../form-controls/InputText";
import InputPassword from "../form-controls/InputPassword";
import InputRadioGroup from "../form-controls/InputRadioGroup";
import { Button, Box, Link, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("First name required"),
  lastName: Yup.string().required("Last name required"),
  email: Yup.string().email("Invalid email").required("Last name required"),
  password: Yup.string()
    .min(8, "Must be minimum 8 characters")
    .required("Password required"),
  confirmPassword: Yup.string()
    .required("Conform password required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
function RegisterFrom() {
  return (
    <>
      <Formik
        initialValues={{
          role: "customer",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={async (values, actions) => {
          try {
            await axios
              .post(`${API_BASE_URL}user/create`, values)
              .then((res) => {
                console.log(res);
                actions.setSubmitting(false);
                actions.resetForm();
              });
          } catch (e) {
            console.log(e.response.data.message);
          }
        }}
      >
        {(props) => (
          <Form>
            <InputRadioGroup
              name="role"
              options={{
                customer: "I want to buy",
                vendor: "I want to sell",
              }}
              value={props.values.userRole}
              onChange={(event) => {
                props.setFieldValue("userRole", event.currentTarget.value);
              }}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <InputText label="First name" name="firstName" />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputText label="Last name" name="lastName" />
              </Grid>
            </Grid>
            <InputText label="Email" name="email" />
            <InputPassword label="Password" name="password" />
            <InputPassword label="Confirm password" name="confirmPassword" />
            <Button
              fullWidth
              color="primary"
              variant="contained"
              type="submit"
              size="large"
              sx={{ mt: 4, mx: "auto", display: "block" }}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Link component={RouterLink} to="/login">
          Login
        </Link>
      </Box>
    </>
  );
}

export default RegisterFrom;
