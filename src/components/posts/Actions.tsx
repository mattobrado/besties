import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  HStack,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { PostType, UserType } from "../../lib/types";
import { content } from "../../lib/content";
import { useDeletePost, useToggleLike } from "../../hooks/postHooks";
import { ROUTES } from "../../lib/routes";
import ActionButton from "./ActionButton";
import React from "react";
import { COLORS } from "../../theme/colors";
import { useComments } from "../../hooks/commentHooks";

const Actions = ({
  post,
  user,
  hideCommentButton,
}: {
  post: PostType;
  user: UserType;
  hideCommentButton?: boolean;
}) => {
  const { id, likes, posterUid: reviewerId } = post;
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
  const { comments } = useComments(id);

  return (
    <Flex>
      <HStack>
        <ActionButton
          onClick={toggleLike}
          icon={isLiked ? content.heartEmoji : content.emptyHeartEmoji}
          number={likes.length}
        />
        {!hideCommentButton && (
          <ActionButton
            icon={content.commentEmoji}
            number={comments?.length ?? 0}
            to={`${ROUTES.COMMENTS}/${id}`}
          />
        )}
      </HStack>
      {user.id === reviewerId && (
        <>
          <Spacer />
          <Button onClick={onOpen} size="sm" variant="link">
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
                  {content.post.deleteReviewHeading}
                </AlertDialogHeader>
                <AlertDialogBody>
                  {content.post.deleteReviewBody}
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
