import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useAddPost, useAuth } from "src/hooks";
import { ContentContext } from "src/context";
import { useContext } from "react";
import { VALIDATE, type PostType } from "src/lib";

const NewCommentForm = ({ post }: { post: PostType }) => {
  const { authUser } = useAuth();
  const content = useContext(ContentContext);
  const { id: postId } = post;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { addPost, isLoading } = useAddPost();

  const handleAddComment = (comment: Partial<PostType>) => {
    if (!authUser) return;
    addPost({
      isComment: true,
      parentPostId: postId,
      posterUid: authUser.id,
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
            placeholder={content.commentForm.commentField}
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
            loadingText={content.post.submitButtonLoadingText}
          >
            {content.post.submitButtonText}
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default NewCommentForm;
