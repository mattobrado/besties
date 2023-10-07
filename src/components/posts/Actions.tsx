import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Container,
  Flex,
  HStack,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PostType, UserType } from "../../lib/types";
import { content } from "../../lib/content";
import { useDeletePost, useToggleLike } from "../../hooks/postHooks";
import { useComments } from "../../hooks/commentHooks";
import { ROUTES } from "../../lib/routes";
import ActionButton from "./ActionButton";
import React from "react";
import { COLORS } from "../../theme/colors";

const Actions = ({ post, user }: { post: PostType; user: UserType }) => {
  const { id, likes, reviewerId } = post;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const isLiked = likes.includes(user.id);
  const config = {
    id,
    isLiked,
    uid: user.id,
  };

  const { toggleLike } = useToggleLike(config);
  const { deletePost } = useDeletePost(id);
  // const { comments, isLoading: commentsLoading } = useComments(id);

  return (
    <Flex>
      <HStack>
        <ActionButton
          onClick={toggleLike}
          icon={isLiked ? content.heartEmoji : content.emptyHeartEmoji}
          number={likes.length}
        />
        <ActionButton
          icon={content.commentEmoji}
          number={0}
          to={`${ROUTES.COMMENTS}/${id}`}
        />
      </HStack>
      {user.id === reviewerId && (
        <>
          <Spacer />
          <Button onClick={deletePost} size="sm" variant="link">
            {content.trashEmoji}
          </Button>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef as any}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent bg={COLORS.BACKGROUND}>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  {content.review.deleteReviewHeading}
                </AlertDialogHeader>
                <AlertDialogBody>
                  {content.review.deleteReviewBody}
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef as any} onClick={onClose}>
                    {content.cancel}
                  </Button>
                  <Button
                    colorScheme={COLORS.COLOR_SCHEME}
                    onClick={deletePost}
                    ml={3}
                  >
                    {content.delete}
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </>
      )}
    </Flex>
  );
};

export default Actions;
