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
import { useAddPost } from "../../hooks/postHooks";
import { useContext, useEffect, useState } from "react";
import { VALIDATE } from "../../lib/formValidation";
import { PostType, UserType } from "../../lib/types";
import { ROUTES } from "../../lib/routes";
import { useNavigate } from "react-router-dom";
import SelectUser from "./SelectUser";
import UserCard from "../profile/UserCard";
import { COLORS } from "../../theme/colors";
import { TfiSearch } from "react-icons/tfi";
import BackgroundContext from "../../BackGroundContext";
import AuthUserContext from "../layout/AuthUserContext";

const NewReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addPost, isLoading: addingReview } = useAddPost();
  const authUser = useContext(AuthUserContext);
  const [rating, setRating] = useState(3);
  const [targetUser, setTargetUser] = useState(
    undefined as UserType | undefined
  );
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const setBackgroundForUser = useContext(BackgroundContext);

  useEffect(() => setBackgroundForUser({ user: targetUser }), [targetUser]);

  const handleAddReview = (review: Partial<PostType>) => {
    if (!targetUser) return;
    addPost({
      isReview: true,
      rating: rating,
      targetUid: targetUser.id,
      posterUid: authUser.id,
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
            <Input
              placeholder={content.reviewForm.revieweeField}
              _placeholder={{ color: COLORS.PLACEHOLDER }}
            />
            <InputRightElement>
              <TfiSearch />
            </InputRightElement>
            ,
          </InputGroup>
        )}
        <RatingInput iconSize={"5xl"} rating={rating} setRating={setRating} />
        <FormControl isInvalid={!!errors.text}>
          <Textarea
            as={TextareaAutosize}
            resize="none"
            size={"lg"}
            placeholder={content.reviewForm.reviewField}
            minRows={5}
            {...register("text", VALIDATE.TEXT)}
            _placeholder={{ color: COLORS.PLACEHOLDER }}
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
        >
          {content.submitButtonText}
        </Button>
      </Stack>
    </form>
  );
};

export default NewReviewForm;
