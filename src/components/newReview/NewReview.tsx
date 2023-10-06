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
import { SearchIcon } from "@chakra-ui/icons";
import RatingInput from "../rating/RatingInput";
import { useState } from "react";
import { CONTENT } from "../../lib/content";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

const NewReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const [rating, setRating] = useState(3);

  const handleAddPost = (data: any) => {
    console.log(data);
    // addPost({
    //   uid: user.id,
    //   text: data.text,
    // });
  };

  return (
    <form onSubmit={handleSubmit(handleAddPost)}>
      <Stack spacing={6}>
        <FormControl isInvalid={false}>
          <InputGroup size={"lg"}>
            <InputRightElement>
              <SearchIcon />
            </InputRightElement>
            <Input
              placeholder={CONTENT.NEW_REVIEW.revieweeField}
              {...register("reviewee", { required: true })}
            />
          </InputGroup>
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl>
        <RatingInput rating={rating} size={"5xl"} setRating={setRating} />
        <Textarea
          as={TextareaAutosize}
          resize="none"
          size={"lg"}
          placeholder={CONTENT.NEW_REVIEW.reviewField}
          minRows={7}
          {...register("text", { required: true })}
        />{" "}
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
