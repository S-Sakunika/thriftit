import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { ItemSchema } from "../../schemas";
import InputText from "../form-controls/InputText";
import InputAutoComplete from "../form-controls/InputAutoComplete";
import { Button } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import useHttpRequest from "../../hooks/useHttpRequest";

function Item() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { get, post } = useHttpRequest();
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  // const action = id ? "update" : "add";
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
    image: [],
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
    await get(`product/${id}`)
      .then((res) => {
        const result = res.data.result;
        console.log(result);
        setInitialValues({
          ...initialValues,
          category: result.category,
          category_value: result.category,
          name: result.name,
          condition: result.attributes.condition,
          condition_value: result.attributes.condition,
          color: result.attributes.color,
          size: result.attributes.size,
          description: result.description,
          price: result.price,
        });
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  useEffect(() => {
    getCategories();
    if (id) getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={ItemSchema}
        onSubmit={async (values, actions) => {
          await post("product/create", values, actions)
            .then((res) => {
              navigate("/my-account/my-items");
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        {(props) => (
          <Form>
            <InputAutoComplete
              freeSolo
              label="Category"
              options={categories}
              name="category"
              size="small"
              formikProps={props}
            />
            <InputText label="Name" name="name" size="small" />
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
            <InputText label="Color" name="color" size="small" />
            <InputText label="Size" name="size" size="small" />
            <InputText label="Description" name="description" size="small" />
            <InputText label="Price" name="price" size="small" />

            <Button
              fullWidth
              color="primary"
              variant="contained"
              type="submit"
              size="large"
              sx={{ mt: 4, mx: "auto", display: "block" }}
              disabled={props.isSubmitting}
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Item;
