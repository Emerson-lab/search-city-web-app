import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "@unform/core";

type TVTextFiledProps = TextFieldProps & {
  name: string;
}

export const VTextField: React.FC<TVTextFiledProps> = ({ name, ...rest }) => {
  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

  return (
    <TextField
      {...rest}
    />
  )
}