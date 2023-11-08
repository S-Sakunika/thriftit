import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { useField } from "formik";

function InputRadioGroup(props) {
  const [field] = useField(props);

  return (
    <RadioGroup row {...field}>
      {Object.entries(props.options).map(([key, value], i) => {
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
  );
}

export default InputRadioGroup;
