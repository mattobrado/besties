import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import {
  UseFormRegister,
  FieldValues,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { INPUT_TYPE } from "src/lib/formValidation";

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
    {inputType !== INPUT_TYPE.BIO ? (
      <Input
        id={inputType}
        type={inputType}
        {...register(inputType, validate)}
        placeholder={placeHolder}
        value={value}
      />
    ) : (
      <Textarea
        as={TextareaAutosize}
        resize="none"
        size={"lg"}
        minRows={3}
        maxLength={100}
        placeholder={placeHolder ?? "100 character limit"}
        {...register(inputType, validate)}
      />
    )}

    <FormErrorMessage>
      {typeof error?.message === "string" && error.message}
    </FormErrorMessage>
  </FormControl>
);

export default FormField;
