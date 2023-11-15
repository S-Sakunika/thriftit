import { TextField, Autocomplete, Box } from "@mui/material";
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
          formikProps.setFieldValue(
            `${field.name}_value`,
            event.target.getAttribute("data-value")
          );
          formikProps.setFieldValue(field.name, event.target.innerText);
        }}
        renderOption={(props, option) => (
          <Box component="li" data-value={option.value} {...props}>
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              {...field}
              label={label}
              error={isInvalid}
              helperText={isInvalid ? meta.error : ""}
            />
            <TextField
              name={`${field.name}_value`}
              type="hidden"
              sx={{
                visibility: "hidden",
                "& .MuiInputBase-root": {
                  padding: "0 !important",
                },
              }}
            />
          </>
        )}
      />
    </>
  );
}

export default InputAutoComplete;
