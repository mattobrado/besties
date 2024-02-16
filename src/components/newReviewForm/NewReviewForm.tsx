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
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";
import { useAddPost, useAuth } from "src/hooks";
import { UserCard } from "src/components/profile";
import { ContentContext } from "src/context";
import { RatingInput, SelectUser } from "src/components/newReviewForm";
import { ROUTES, type PostType, type UserType, VALIDATE } from "src/lib";

export const NewReviewForm = () => {
  const { authUser } = useAuth();
  const content = useContext(ContentContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addPost, isLoading: addingReview } = useAddPost();
  const [rating, setRating] = useState(3);
  const [targetUser, setTargetUser] = useState(
    undefined as UserType | undefined
  );
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddReview = (review: Partial<PostType>) => {
    if (!targetUser) return;
    addPost({
      isReview: true,
      rating: rating,
      targetUid: targetUser.id,
      posterUid: authUser?.id,
      text: review.text,
    });
    navigate(ROUTES.HOME);
  };

  return (
    <form onSubmit={handleSubmit(handleAddReview)}>
      <SelectUser
        isOpen={isOpen}
        onClose={onClose}
        onClick={(user: UserType | undefined) => {
          setTargetUser(user);
          onClose();
        }}
      />
      <Stack spacing={3} hidden={isOpen}>
        {targetUser ? (
          <InputGroup size={"lg"} onClick={onOpen}>
            <UserCard user={targetUser} onClick={onOpen} />,
            <InputRightElement mt={2}>{content.editEmoji}</InputRightElement>
          </InputGroup>
        ) : (
          <InputGroup size={"lg"} onClick={onOpen} h={16}>
            <Input placeholder={content.newPost.revieweeField} />
            <InputRightElement>
              <TfiSearch />
            </InputRightElement>
            ,
          </InputGroup>
        )}
        <RatingInput
          iconSize={"5xl"}
          rating={rating}
          setRating={setRating}
          direction={"row"}
        />
        <FormControl isInvalid={!!errors.text}>
          <Textarea
            as={TextareaAutosize}
            resize="none"
            size={"lg"}
            placeholder={content.newPost.reviewField}
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
          loadingText={content.post.submitButtonLoadingText}
        >
          {content.post.submitButtonText}
        </Button>
      </Stack>
    </form>
  );
};
