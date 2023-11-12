import { TextField, Autocomplete } from "@mui/material";
import { useField } from "formik";

function InputAutoComplete({ formikProps, options, label, ...props }) {
  const [field, meta] = useField(props);
  const isInvalid = meta.touched && !!meta.error;
  return (
    <>
      <Autocomplete
        options={options}
        {...props}
        value={formikProps.values[field.name]}
        onChange={(event) => {
          formikProps.setFieldValue(field.name, event.target.innerText);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            {...field}
            label={label}
            error={isInvalid}
            helperText={isInvalid ? meta.error : ""}
          />
        )}
      />
    </>
  );
}

export default InputAutoComplete;
