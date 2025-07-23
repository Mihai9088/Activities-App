import { TextField, type TextFieldProps } from '@mui/material';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

type Props<T extends FieldValues> = {} & UseControllerProps<T> & TextFieldProps;
const TextInput = <T extends FieldValues>(props: Props<T>) => {
  const { field, fieldState } = useController({ ...props });
  return (
    <TextField
      {...props}
      {...field}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
      variant="outlined"
    />
  );
};

export default TextInput;
