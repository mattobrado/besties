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
import { PostType, UserType } from "../../lib/types";
import { bestiesContent } from "../../lib/content/bestiesContent";
import { useDeletePost, useToggleLike } from "../../hooks/postHooks";
import { ROUTES } from "../../lib/routes";
import ActionButton from "./ActionButton";
import React from "react";
import { COLORS } from "../../theme/colors";
import { ChatIcon } from "@chakra-ui/icons";
import { FaRegHeart, FaHeart, FaTrash } from "react-icons/fa";
import { ACTION_ICON_SIZE } from "../../lib/constants";

const Actions = ({
  post,
  user,
  hideCommentButton,
}: {
  post: PostType;
  user: UserType;
  hideCommentButton?: boolean;
}) => {
  const { id, likeUids, posterUid, likeCount, commentCount } = post;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const isLiked = likeUids.includes(user.id);
  const config = {
    id,
    isLiked,
    uid: user.id,
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
      {user.id === posterUid && (
        <>
          <Spacer />
          <IconButton
            onClick={onOpen}
            size={ACTION_ICON_SIZE}
            variant="ghost"
            icon={<FaTrash />}
            aria-label={"delete post"}
            color={COLORS.PRIMARY_FONT}
          />
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef as any}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent bg={COLORS.BACKGROUND}>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  {bestiesContent.post.deleteReviewHeading}
                </AlertDialogHeader>
                <AlertDialogBody>
                  {bestiesContent.post.deleteReviewBody}
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef as any} onClick={onClose}>
                    {bestiesContent.cancel}
                  </Button>
                  <Button
                    colorScheme={COLORS.COLOR_SCHEME}
                    onClick={deletePost}
                    ml={3}
                  >
                    {bestiesContent.delete}
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
