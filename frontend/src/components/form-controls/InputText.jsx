import { TextField } from "@mui/material";
import { useField } from "formik";

function InputText({ ...props }) {
  const [field, meta] = useField(props);
  const isInvalid = meta.touched && !!meta.error;
  return (
    <>
      <TextField
        fullWidth
        margin="normal"
        variant="outlined"
        {...field}
        {...props}
        error={isInvalid}
        helperText={isInvalid ? meta.error : ""}
      />
    </>
  );
}

export default InputText;
