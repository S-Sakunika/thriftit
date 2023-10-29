import { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";

function InputPassword({ label, ...props }) {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const isInvalid = meta.touched && !!meta.error;

  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <InputLabel error={isInvalid}>{label}</InputLabel>
      <OutlinedInput
        type={showPassword ? "text" : "password"}
        {...field}
        {...props}
        error={isInvalid}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              color={isInvalid ? "error" : ""}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
      {isInvalid && <FormHelperText error>{meta.error}</FormHelperText>}
    </FormControl>
  );
}

export default InputPassword;
