import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextFieldProps,
} from '@mui/material';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

type Props<T extends FieldValues> = {
  items: { text: string; value: string }[];
  label: string;
} & UseControllerProps<T> &
  TextFieldProps;

const SelectInput = <T extends FieldValues>(props: Props<T>) => {
  const { field, fieldState } = useController(props);

  return (
    <FormControl fullWidth error={!!fieldState.error}>
      <InputLabel>{props.label}</InputLabel>
      <Select {...field} label={props.label} value={field.value || ''} onChange={field.onChange}>
        {props.items.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{fieldState.error?.message}</FormHelperText>
    </FormControl>
  );
};

export default SelectInput;
