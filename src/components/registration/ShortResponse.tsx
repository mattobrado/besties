import { FormControl, FormErrorMessage, Textarea } from "@chakra-ui/react";
import NextButton from "./NextButton";
import { useAuth } from "../../hooks/authHooks";
import { useUpdateUser } from "../../hooks/userHooks";
import { bestiesContent } from "../../lib/content/bestiesContent";
import { VALIDATE } from "../../lib/formValidation";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";

const RadioOptions = ({
  goToNext,
  field,
}: {
  goToNext: Function;
  field: string;
}) => {
  const { authUser } = useAuth();
  const { updateUser, isLoading } = useUpdateUser(authUser?.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddReview = (data: any) => {
    updateUser({ [field]: data.text }).then(() => goToNext());
  };
  return (
    <form onSubmit={handleSubmit(handleAddReview)}>
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
        <NextButton isLoading={isLoading} buttonProps={{ type: "submit" }} />
      </FormControl>
    </form>
  );
};

export default RadioOptions;
