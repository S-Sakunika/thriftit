import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string()
        .min(8, "Must be minimum 8 characters")
        .required("Password required"),
    confirmPassword: Yup.string()
        .required("Conform password required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Password required"),
});

export { RegisterSchema, LoginSchema }