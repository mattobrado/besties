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

const AuthFormField = ({
  error,
  inputType,
  label,
  register,
  validate,
}: {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  inputType: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  validate: any;
}) => (
  <FormControl isInvalid={!!error}>
    <FormLabel htmlFor={inputType}>{label}</FormLabel>
    <Input id={inputType} type={inputType} {...register(inputType, validate)} />
    <FormErrorMessage>
      {typeof error?.message === "string" && error.message}
    </FormErrorMessage>{" "}
  </FormControl>
);

export default AuthFormField;
