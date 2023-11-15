import {
  Grid,
  Stack,
  Typography,
  Box,
  alpha,
  Button,
  Divider,
} from "@mui/material";
import { Formik, Form } from "formik";
import InputText from "../components/form-controls/InputText";
import InputAutoComplete from "../components/form-controls/InputAutoComplete";
import { CheckoutSchema } from "../schemas";

function Checkout() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        country: "",
      }}
      validationSchema={CheckoutSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <InputText label="First name" name="firstName" size="small" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputText label="Last name" name="lastName" size="small" />
                </Grid>
              </Grid>

              <Box sx={{ mt: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 3 }}>
                  Shipping address
                </Typography>
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <InputAutoComplete
                      freeSolo
                      label="Country"
                      options={["aa", "ab", "bx", "bb"]}
                      name="country"
                      size="small"
                      formikProps={props}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: (theme) =>
                    alpha(theme.palette.secondary.main, 0.03),
                  p: 3,
                  borderRadius: "1em",
                }}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1.1em", mb: 1 }}>
                  Order summary
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>Total</Typography>
                  <Typography>$189.56</Typography>
                </Stack>
                <Divider variant="middle" sx={{ my: 3 }} />
                <Typography sx={{ fontWeight: 600, fontSize: "1.1em", mb: 1 }}>
                  Payment methods
                </Typography>
              </Box>
              <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                sx={{ mt: 2 }}
                type="submit"
                disabled={props.isSubmitting}
              >
                Place order
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default Checkout;
