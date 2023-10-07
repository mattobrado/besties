import { Button, Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PostType, UserType } from "../../lib/types";
import { content } from "../../lib/content";
import { useDeletePost, useToggleLike } from "../../hooks/postHooks";
import { useComments } from "../../hooks/commentHooks";

const Actions = ({ post, user }: { post: PostType; user: UserType }) => {
  const { id, likes } = post;

  const isLiked = likes.includes(user.id);
  const config = {
    id,
    isLiked,
    uid: user.id,
  };

  const { toggleLike, isLoading: likeLoading } = useToggleLike(config);
  // const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  // const { comments, isLoading: commentsLoading } = useComments(id);

  return (
    <Box>
      <HStack spacing={0}>
        <Button
          onClick={toggleLike}
          // isLoading={likeLoading}
          size="sm"
          variant="link"
        >
          {isLiked ? content.heartEmoji : content.emptyHeartEmoji}
        </Button>
        <Text fontSize="sm">{likes.length}</Text>
      </HStack>
      {/* <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
          isLoading={commentsLoading}
          size="md"
          colorScheme="teal"
          variant="ghost"
          icon={comments?.length === 0 ? <FaRegComment /> : <FaComment />}
          isRound
        />
        {comments?.length}
      </Flex> */}

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
