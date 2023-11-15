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

const ItemSchema = Yup.object().shape({
    category: Yup.string().required("Category required"),
    name: Yup.string().required("Name required"),
    condition: Yup.string().required("Condition required"),
    price: Yup.number().positive("Must be more than 0").required("Price required"),
});

const CheckoutSchema = Yup.object().shape({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    country: Yup.string().required("Country required"),
});

export { RegisterSchema, LoginSchema, ItemSchema, CheckoutSchema }