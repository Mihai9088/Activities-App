import { TextField, TextFieldProps } from '@mui/material';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

type TextInputProps<T extends FieldValues> = UseControllerProps<T> & TextFieldProps;

const TextInput = <T extends FieldValues>(props: TextInputProps<T>) => {
  const { field, fieldState } = useController(props);

  return (
    <TextField
      fullWidth
      {...field}
      {...props}
      value={field.value || ''}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
};

export default TextInput;
