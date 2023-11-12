import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { useField } from "formik";

function InputRadioGroup({ formikProps, options, ...props }) {
  const [field] = useField(props);

  return (
    <>
      <RadioGroup
        row
        {...field}
        value={formikProps.values[field.name]}
        onChange={(event) => {
          formikProps.setFieldValue("role", event.currentTarget.value);
        }}
      >
        {Object.entries(options).map(([key, value], i) => {
          return (
            <FormControlLabel
              key={i}
              value={key}
              control={<Radio size="small" />}
              label={value}
            />
          );
        })}
      </RadioGroup>
    </>
  );
}

export default InputRadioGroup;
