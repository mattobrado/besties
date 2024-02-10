import {
  FormControl,
  FormErrorMessage,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import NextButton from "./NextButton";
import { useAuth } from "../../hooks/authHooks";
import { useUpdateUser } from "../../hooks/userHooks";
import { bestiesContent } from "../../lib/content/bestiesContent";
import { VALIDATE } from "../../lib/formValidation";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";

const RadioOptions = ({
  options,
  goToNext,
  field,
}: {
  options?: string[];
  goToNext: Function;
  field: string;
}) => {
  const { authUser } = useAuth();
  const toast = useToast();
  const { updateUser, isLoading } = useUpdateUser(authUser?.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <FormControl isInvalid={!!errors.text}>
      <Textarea
        as={TextareaAutosize}
        resize="none"
        size={"lg"}
        placeholder={bestiesContent.reviewForm.reviewField}
        minRows={5}
        {...register("text", VALIDATE.TEXT)}
      />
      <FormErrorMessage>
        {typeof errors.text?.message === "string" && errors.text?.message}
      </FormErrorMessage>
      <NextButton onClick={() => {}} isLoading={isLoading} />
      );
    </FormControl>
  );
};

export default RadioOptions;
