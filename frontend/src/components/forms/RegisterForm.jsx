import { Formik, Form } from "formik";
import { RegisterSchema } from "../../schemas";
import InputText from "../form-controls/InputText";
import InputPassword from "../form-controls/InputPassword";
import InputRadioGroup from "../form-controls/InputRadioGroup";
import { Button, Box, Link, Grid } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import useHttpRequest from "../../hooks/useHttpRequest";

function RegisterFrom() {
  const { post } = useHttpRequest();
  const navigate = useNavigate();

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
          await post("user/create", values, actions)
            .then((res) => {
              navigate("/login");
            })
            .catch((e) => {
              // console.log(e)
            });
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
              formikProps={props}
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
              disabled={props.isSubmitting}
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
