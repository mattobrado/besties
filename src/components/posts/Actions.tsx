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
  IconButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { ActionButton } from "./ActionButton";
import React, { useContext } from "react";
import { ChatIcon } from "@chakra-ui/icons";
import { FaRegHeart, FaHeart, FaTrash } from "react-icons/fa";
import { useAuth, useDeletePost, useToggleLike } from "src/hooks";
import { ContentContext } from "src/context";
import { ROUTES, type PostType, ACTION_ICON_SIZE } from "src/lib";

export const Actions = ({
  post,
  hideCommentButton,
}: {
  post: PostType;
  hideCommentButton?: boolean;
}) => {
  const { authUser } = useAuth();
  const content = useContext(ContentContext);
  const { id, likeUids, posterUid, likeCount, commentCount } = post;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const isLiked = !!authUser?.id && likeUids.includes(authUser?.id);
  const config = {
    id,
    isLiked,
    uid: authUser?.id,
  };

  const { toggleLike } = useToggleLike(config);
  const { deletePost } = useDeletePost(post);

  return (
    <Flex>
      <HStack>
        <ActionButton
          onClick={toggleLike}
          icon={isLiked ? <FaHeart /> : <FaRegHeart />}
          number={likeCount}
        />
        {!hideCommentButton && (
          <ActionButton
            icon={<ChatIcon />}
            number={commentCount}
            to={`${ROUTES.POST}/${id}`}
          />
        )}
      </HStack>
      {authUser?.id === posterUid && (
        <>
          <Spacer />
          <IconButton
            onClick={onOpen}
            size={ACTION_ICON_SIZE}
            variant="ghost"
            icon={<FaTrash />}
            aria-label={"delete post"}
          />
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef as any}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
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
                  <Button onClick={deletePost} ml={3}>
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
