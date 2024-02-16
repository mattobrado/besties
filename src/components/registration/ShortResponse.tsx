import { Box, FormControl, FormErrorMessage, Textarea } from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useAuth, useUpdateUser } from "src/hooks";
import { NextButton } from "src/components/registration";
import { type UserType, VALIDATE } from "src/lib";
import type { RegistrationStepPropsType } from "src/lib/types";

export type ShortResponsePropsType = RegistrationStepPropsType & {
  field: string;
};

export const ShortResponse = ({
  onNextButtonClick,
  field,
}: ShortResponsePropsType) => {
  const { authUser } = useAuth();
  const { updateUser, isLoading } = useUpdateUser(authUser?.id);

  const values = {
    text: authUser && authUser[field as keyof UserType],
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values,
  });

  const handleAddResponse = (data: any) => {
    updateUser({
      [field]: data.text,
    }).then(() => {
      onNextButtonClick();
    });
  };
  return (
    authUser && (
      <form onSubmit={handleSubmit(handleAddResponse)}>
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
              id="shortResponseInput"
            />
            <FormErrorMessage>
              {typeof errors.text?.message === "string" && errors.text?.message}
            </FormErrorMessage>
          </Box>
          <NextButton isLoading={isLoading} buttonProps={{ type: "submit" }} />
        </FormControl>
      </form>
    )
  );
};
