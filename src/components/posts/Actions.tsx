import { Button, Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PostType, UserType } from "../../lib/types";
import { content } from "../../lib/content";
import { useDeletePost, useToggleLike } from "../../hooks/postHooks";
import { useComments } from "../../hooks/commentHooks";
import { ROUTES } from "../../lib/routes";
import ActionButton from "./ActionButton";

const Actions = ({ post, user }: { post: PostType; user: UserType }) => {
  const { id, likes } = post;

  const isLiked = likes.includes(user.id);
  const config = {
    id,
    isLiked,
    uid: user.id,
  };

  const { toggleLike } = useToggleLike(config);
  // const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  // const { comments, isLoading: commentsLoading } = useComments(id);

  return (
    <Box>
      <HStack>
        <Box w={12}>
          <ActionButton
            onClick={toggleLike}
            icon={isLiked ? content.heartEmoji : content.emptyHeartEmoji}
            number={likes.length}
          />
        </Box>
        <ActionButton
          icon={content.commentEmoji}
          number={0}
          to={`${ROUTES.PROTECTED}/comments/${id}`}
        />
      </HStack>
      {/* <HStack>
        <Button
          as={Link}
          to={`${ROUTES.PROTECTED}/comments/${id}`}
          isLoading={commentsLoading}
          size="md"
          variant="link"
        >
          {comments?.length === 0 ? "💬" : "💬"}
        </Button>
        {comments?.length}
      </HStack> */}

      {/* {!userLoading && user.id === uid && (
        <IconButton
          ml="auto"
          onClick={deletePost}
          isLoading={deleteLoading}
          size="md"
          colorScheme="red"
          variant="ghost"
          icon={<FaTrash />}
          isRound
        />
      )} */}
    </Box>
  );
};

export default Actions;
