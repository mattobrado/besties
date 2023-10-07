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
import { content } from "../../lib/content";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/authHooks";
import { useAddReview } from "../../hooks/reviewHooks";
import { useState } from "react";
import { VALIDATE } from "../../lib/formValidation";

const NewReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addReview, isLoading: addingReview } = useAddReview();
  const { user } = useAuth();
  const [rating, setRating] = useState(3);

  const handleAddReview = (review: any) => {
    console.log(review, rating);
    if (!user) return;
    addReview({
      reviewerId: user.id,
      text: review.text,
      revieweeId: review.revieweeId,
      rating: rating,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleAddReview)}>
      <Stack spacing={3}>
        <FormControl isInvalid={!!errors.revieweeId}>
          <InputGroup size={"lg"}>
            <InputRightElement>{content.searchEmoji}</InputRightElement>
            <Input
              placeholder={content.reviewForm.revieweeField}
              {...register("revieweeId", {
                required: {
                  value: true,
                  message: content.reviewForm.fieldRequired,
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
          rating={rating}
          setRating={setRating}
        />
        <FormControl isInvalid={!!errors.text}>
          <Textarea
            as={TextareaAutosize}
            resize="none"
            size={"lg"}
            placeholder={content.reviewForm.reviewField}
            minRows={5}
            {...register("text", VALIDATE.REVIEW)}
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
          loadingText={content.reviewForm.submitButtonLoadingText}
          variant={"custom"}
        >
          {content.reviewForm.submitButtonText}
        </Button>
      </Stack>
    </form>
  );
};

export default NewReviewForm;
