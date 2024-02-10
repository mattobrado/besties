import { Box, FormControl, FormErrorMessage, Textarea } from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth, useUpdateUser } from "src/hooks";
import { ROUTES } from "src/lib/constants";
import { VALIDATE } from "src/lib/formValidation";
import { NextButton } from "src/components/registration";

const RadioOptions = ({
  goToNext,
  field,
}: {
  goToNext?: Function;
  field: string;
}) => {
  const { authUser } = useAuth();
  const { updateUser, isLoading } = useUpdateUser(authUser?.id);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddReview = (data: any) => {
    updateUser({ [field]: data.text, isApplicationSubmitted: !goToNext }).then(
      () => {
        goToNext ? goToNext() : navigate(ROUTES.APPLICANT);
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(handleAddReview)}>
      <FormControl isInvalid={!!errors.text}>
        <Box pb={10}>
          <Textarea
            as={TextareaAutosize}
            resize="none"
            size={"lg"}
            placeholder={"1000 character limit"}
            minRows={5}
            maxLength={1000}
            {...register("text", VALIDATE.TEXT)}
          />
          <FormErrorMessage>
            {typeof errors.text?.message === "string" && errors.text?.message}
          </FormErrorMessage>
        </Box>
        <NextButton isLoading={isLoading} buttonProps={{ type: "submit" }} />
      </FormControl>
    </form>
  );
};

export default RadioOptions;
