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
import RatingInput from "./RatingInput";
import { CONTENT } from "../../lib/content";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";
import { useAddReview } from "../../hooks/reviews";

const NewReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addReview, isLoading: addingReview } = useAddReview();
  const { user } = useAuth();

  const handleAddReview = (review: any) => {
    console.log(review);
    // if (!user) return;
    // addReview({
    //   reviewerId: user.id,
    //   text: review.text,
    //   revieweeId: review.revieweeId,
    //   rating: review.rating,
    // });
  };

  return (
    <form onSubmit={handleSubmit(handleAddReview)}>
      <Stack spacing={5}>
        <FormControl isInvalid={!!errors.revieweeId}>
          <InputGroup size={"lg"}>
            <InputRightElement>{CONTENT.searchEmoji}</InputRightElement>
            <Input
              placeholder={CONTENT.NEW_REVIEW.revieweeField}
              {...register("revieweeId", {
                required: {
                  value: true,
                  message: CONTENT.NEW_REVIEW.fieldRequired,
                },
              })}
            />
          </InputGroup>
          <FormErrorMessage>
            {typeof errors.revieweeId?.message === "string" &&
              errors.revieweeId?.message}
          </FormErrorMessage>
        </FormControl>
        <Input
          as={RatingInput}
          iconSize={"5xl"}
          {...register("rating", {
            required: true,
          })}
        />
        <FormControl isInvalid={!!errors.text}>
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
          isLoading={addingReview}
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