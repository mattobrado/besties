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
import { bestiesContent } from "../../lib/content/bestiesContent";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useAddPost } from "../../hooks/postHooks";
import { useContext, useEffect, useState } from "react";
import { VALIDATE } from "../../lib/formValidation";
import { PostType, UserType } from "../../lib/types";
import { useNavigate } from "react-router-dom";
import SelectUser from "./SelectUser";
import UserCard from "../profile/UserCard";
import { TfiSearch } from "react-icons/tfi";
import BackgroundContext from "../../BackGroundContext";
import { ROUTES } from "../../lib/constants";
import { useAuth } from "../../hooks/authHooks";

const NewReviewForm = () => {
  const { authUser } = useAuth();
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
  const setBackground = useContext(BackgroundContext);

  useEffect(
    () => setBackground(targetUser?.favoriteColor),
    [targetUser?.favoriteColor]
  );

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
            <InputRightElement mt={2}>
              {bestiesContent.editEmoji}
            </InputRightElement>
          </InputGroup>
        ) : (
          <InputGroup size={"lg"} onClick={onOpen} h={16}>
            <Input placeholder={bestiesContent.reviewForm.revieweeField} />
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
            placeholder={bestiesContent.reviewForm.reviewField}
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
          loadingText={bestiesContent.submitButtonLoadingText}
        >
          {bestiesContent.submitButtonText}
        </Button>
      </Stack>
    </form>
  );
};

export default NewReviewForm;
