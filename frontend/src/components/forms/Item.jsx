import { useEffect, useState } from "react";
import { InputAdornment, Typography, alpha } from "@mui/material";
import { Formik, Form } from "formik";
import { ItemSchema } from "../../schemas";
import InputText from "../form-controls/InputText";
import InputFile from "../form-controls/InputFile";
import InputAutoComplete from "../form-controls/InputAutoComplete";
import { Button, Grid, Stack, Box } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import useHttpRequest from "../../hooks/useHttpRequest";
const UPLOAD_BASE_URL = process.env.REACT_APP_UPLOAD_BASE_URL;

function Item() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { get, post } = useHttpRequest();
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const action = id ? "update" : "add";
  // const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    category: "",
    category_value: "",
    name: "",
    condition: "",
    condition_value: "",
    color: "",
    size: "",
    description: "",
    price: "",
    image: "",
    vendor: user._id,
  });

  const getCategories = async () => {
    await get(`category`)
      .then((res) => {
        const result = res.data.result;
        const options = result
          .filter((item) => item.parentCategory)
          .map((item) => ({
            value: item._id,
            label: `${item.parentCategory.name} > ${item.name}`,
          }))
          .sort((a, b) => {
            if (a.label < b.label) {
              return -1;
            }
            if (a.label > b.label) {
              return 1;
            }
            return 0;
          });
        setCategories(options);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const getProduct = async () => {
    // setLoading(true);
    await get(`product/${id}`)
      .then((res) => {
        const result = res.data.result;

        setInitialValues({
          ...initialValues,
          category: getLabelByValue(result.category._id),
          category_value: result.category._id,
          name: result.name,
          condition: result.attributes.condition,
          condition_value: result.attributes.condition,
          color: result.attributes.color,
          size: result.attributes.size,
          description: result.description,
          price: result.price,
          image: result.image.filename,
        });
        // setLoading(false);
      })
      .catch((e) => {
        // setLoading(false);
        // console.log(e);
      });
  };

  const getLabelByValue = (value) => {
    const category = categories.find((category) => category.value === value);
    return category ? category.label : null;
  };

  useEffect(() => {
    getCategories();
    if (action === "update") getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return (
    <>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {action === "update" ? "Update item" : "Add item"}
      </Typography>

      {/* {loading && (
        <Stack spacing={2}>
          <Stack spacing={2} direction="row">
            <Skeleton variant="rounded" width="50%" height={35} />
            <Skeleton variant="rounded" width="50%" height={35} />
          </Stack>
          <Stack spacing={2}>
            <Skeleton variant="rounded" width="100%" height={35} />
            <Skeleton variant="rounded" width="100%" height={100} />
          </Stack>
        </Stack>
      )} */}

      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={ItemSchema}
        onSubmit={async (values, actions) => {
          const formData = new FormData();

          for (const data in values) {
            formData.append(data, values[data]);
          }

          await post(
            action === "update" ? `product/update/${id}` : "product/create",
            formData,
            actions
          )
            .then((res) => {
              navigate("/my-account/my-items");
            })
            .catch((e) => {
              // console.log(e);
            });
        }}
      >
        {(props) => {
          const previewImage = () => {
            if (props.values.image && !initialValues.image) {
              console.log(props.values.image);
              return URL.createObjectURL(props.values.image);
            } else if (initialValues.image) {
              if (props.values.image instanceof File) {
                return URL.createObjectURL(props.values.image);
              }
              return `${UPLOAD_BASE_URL}${initialValues.image}`;
            } else {
              return require("../../assets/images/preview-placeholder.png");
            }
          };
          return (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <InputAutoComplete
                    freeSolo
                    label="Category"
                    options={categories}
                    name="category"
                    size="small"
                    formikProps={props}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputText
                    label="Name"
                    name="name"
                    size="small"
                    sx={{ mt: 0 }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputAutoComplete
                    freeSolo
                    label="Condition"
                    options={[
                      { value: "Used", label: "Used" },
                      { value: "New", label: "New" },
                    ]}
                    name="condition"
                    size="small"
                    formikProps={props}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputText
                    label="Color"
                    name="color"
                    size="small"
                    sx={{ mt: 0 }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputText
                    label="Size"
                    name="size"
                    size="small"
                    sx={{ mt: 0 }}
                  />
                </Grid>
                <Grid item md={12}>
                  <InputText
                    label="Description"
                    name="description"
                    size="small"
                    multiline
                    rows={4}
                    sx={{ mt: 0 }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputText
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                    label="Price"
                    name="price"
                    size="small"
                    sx={{ mt: 0 }}
                  />
                </Grid>
                <Grid item md={12}>
                  <InputFile
                    name="image"
                    size="small"
                    formikProps={props}
                    sx={{ mt: 0 }}
                  />
                  <Box
                    component="img"
                    src={previewImage()}
                    sx={{
                      mt: 1,
                      maxWidth: "300px",
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "0.25rem",
                      border: "1px solid",
                    }}
                  />
                </Grid>
              </Grid>

              <Stack sx={{ mt: 4 }} direction="row" justifyContent="end">
                {action === "update" && (
                  <Button
                    component={Link}
                    to="/my-account/my-items"
                    sx={{
                      backgroundColor: (theme) =>
                        alpha(theme.palette.secondary.main, 0.2),
                      minWidth: "200px",
                      mr: 1,
                    }}
                    variant="contained"
                    size="large"
                    disabled={props.isSubmitting}
                  >
                    Cancel
                  </Button>
                )}
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  size="large"
                  disabled={props.isSubmitting}
                  sx={{ minWidth: "200px" }}
                >
                  Save
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default Item;
