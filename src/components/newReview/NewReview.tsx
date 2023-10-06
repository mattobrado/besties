import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import RatingInput from "../rating/RatingInput";
import { CONTENT } from "../../lib/content";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";

const NewReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const handleAddPost = (data: any) => {
    console.log(data);
    // addPost({
    //   uid: user.id,
    //   text: data.text,
    // });
  };

  return (
    <form onSubmit={handleSubmit(handleAddPost)}>
      <Stack spacing={5}>
        <FormControl isInvalid={!!errors.reviewee}>
          <InputGroup size={"lg"}>
            <InputRightElement>{CONTENT.searchEmoji}</InputRightElement>
            <Input
              placeholder={CONTENT.NEW_REVIEW.revieweeField}
              {...register("reviewee", {
                required: {
                  value: true,
                  message: CONTENT.NEW_REVIEW.fieldRequired,
                },
              })}
            />
          </InputGroup>
          <FormErrorMessage>
            {typeof errors.reviewee?.message === "string" &&
              errors.reviewee?.message}
          </FormErrorMessage>
        </FormControl>
        <Input
          as={RatingInput}
          iconSize={"5xl"}
          {...register("rating", {
            required: true,
          })}
        />
        <FormControl isInvalid={!!errors.reviewee}>
          <Textarea
            as={TextareaAutosize}
            resize="none"
            size={"lg"}
            placeholder={CONTENT.NEW_REVIEW.reviewField}
            minRows={7}
            {...register("text", {
              required: {
                value: true,
                message: CONTENT.NEW_REVIEW.fieldRequired,
              },
            })}
          />
          <FormErrorMessage>
            {typeof errors.text?.message === "string" && errors.text?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          size="md"
          w="full"
          isLoading={false}
          loadingText={CONTENT.NEW_REVIEW.submitButtonLoadingText}
          variant={"custom"}
        >
          {CONTENT.NEW_REVIEW.submitButtonText}
        </Button>
      </Stack>
    </form>
  );
};

export default NewReview;
