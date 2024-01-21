import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { bestiesContent } from "../../lib/content/bestiesContent";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { VALIDATE } from "../../lib/formValidation";
import { PostType, UserType } from "../../lib/types";
import { useAddPost } from "../../hooks/postHooks";
import { COLORS } from "../../theme/colors";

const NewCommentForm = ({ user, post }: { user: UserType; post: PostType }) => {
  const { id: postId } = post;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { addPost, isLoading } = useAddPost();

  const handleAddComment = (comment: Partial<PostType>) => {
    if (!user) return;
    addPost({
      isComment: true,
      parentPostId: postId,
      posterUid: user.id,
      text: comment.text,
    });
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
            pb={1}
            placeholder={bestiesContent.commentForm.commentField}
            _placeholder={{ color: COLORS.PLACEHOLDER }}
            {...register("text", VALIDATE.TEXT)}
          />
        </FormControl>
      </Box>
      <Box mt="auto" mb="2">
        <FormControl isInvalid={!!errors.text}>
          <Button
            type="submit"
            size="sm"
            isLoading={isLoading}
            loadingText={bestiesContent.submitButtonLoadingText}
          >
            {bestiesContent.submitButtonText}
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default NewCommentForm;
