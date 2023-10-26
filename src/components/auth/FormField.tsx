import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import {
  UseFormRegister,
  FieldValues,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

const FormField = ({
  error,
  inputType,
  label,
  register,
  validate,
  placeHolder,
  value,
}: {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  inputType: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  validate?: any;
  placeHolder?: string;
  value?: string;
}) => (
  <FormControl isInvalid={!!error}>
    <FormLabel htmlFor={inputType}>{label}</FormLabel>
    <Input
      id={inputType}
      type={inputType}
      {...register(inputType, validate)}
      placeholder={placeHolder}
      value={value}
    />
    <FormErrorMessage>
      {typeof error?.message === "string" && error.message}
    </FormErrorMessage>
  </FormControl>
);

export default FormField;
