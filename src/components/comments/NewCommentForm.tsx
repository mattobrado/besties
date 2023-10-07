import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { content } from "../../lib/content";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { VALIDATE } from "../../lib/formValidation";
import { CommentType, PostType, UserType } from "../../lib/types";
import { useAddComment } from "../../hooks/commentHooks";

const NewCommentForm = ({ user, post }: { user: UserType; post: PostType }) => {
  const { id: postID } = post;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { addComment, isLoading: commentLoading } = useAddComment({
    postID,
    uid: user?.id,
  });

  const handleAddComment = (data: Partial<CommentType>) => {
    addComment(data.text);
    reset();
  };

  return (
    <Flex py={2} as={"form"} onSubmit={handleSubmit(handleAddComment)}>
      <Box w="full" mr={2}>
        <FormControl isInvalid={!!errors.text}>
          <Input
            as={TextareaAutosize}
            resize="none"
            size={"lg"}
            minRows={0}
            h={10}
            placeholder={content.commentForm.commentField}
            {...register("text", VALIDATE.TEXT)}
          />
        </FormControl>
      </Box>

      <Box>
        <FormControl isInvalid={!!errors.text}>
          <Button
            type="submit"
            size="sm"
            isLoading={commentLoading}
            loadingText={content.submitButtonLoadingText}
            variant={"custom"}
          >
            {content.submitButtonText}
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default NewCommentForm;
