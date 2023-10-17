import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import RatingInput from "./RatingInput";
import { content } from "../../lib/content";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/authHooks";
import { useAddPost } from "../../hooks/postHooks";
import { useState } from "react";
import { VALIDATE } from "../../lib/formValidation";
import { PostType } from "../../lib/types";
import { ROUTES } from "../../lib/routes";
import { useNavigate } from "react-router-dom";
import SelectUser from "./SelectUser";

const NewReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addPost, isLoading: addingReview } = useAddPost();
  const { user: authUser } = useAuth();
  const [rating, setRating] = useState(3);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddReview = (review: Partial<PostType>) => {
    if (!authUser) return;
    addPost({
      isReview: true,
      rating: rating,
      targetUid: review.targetUid,
      posterUid: authUser.id,
      text: review.text,
    });
    navigate(ROUTES.HOME);
  };

  return (
    <form onSubmit={handleSubmit(handleAddReview)}>
      <Stack spacing={3}>
        <SelectUser isOpen={isOpen} onClose={onClose} />
        <FormControl isInvalid={!!errors.revieweeId}>
          <InputGroup size={"lg"}>
            <InputRightElement>{content.searchEmoji}</InputRightElement>
            <Input
              placeholder={content.reviewForm.revieweeField}
              onClick={onOpen}
              {...register("targetUid", {
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
            {...register("text", VALIDATE.TEXT)}
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
          loadingText={content.submitButtonLoadingText}
          variant={"custom"}
        >
          {content.submitButtonText}
        </Button>
      </Stack>
    </form>
  );
};

export default NewReviewForm;
