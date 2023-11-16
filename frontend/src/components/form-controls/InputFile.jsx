import { TextField } from "@mui/material";
import { useField } from "formik";

function InputFile({ formikProps, ...props }) {
  const [field, meta] = useField(props);
  const isInvalid = meta.touched && !!meta.error;

  return (
    <>
      <TextField
        type="file"
        fullWidth
        margin="normal"
        variant="outlined"
        {...field}
        {...props}
        value={undefined}
        onChange={(event) => {
          console.log(event.target.files);
          formikProps.setFieldValue(field.name, event.target.files[0]);
        }}
        error={isInvalid}
        helperText={isInvalid ? meta.error : ""}
      />
    </>
  );
}

export default InputFile;
