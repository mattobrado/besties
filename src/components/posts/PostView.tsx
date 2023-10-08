import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import Actions from "./Actions";
import { PostType, UserType } from "../../lib/types";

const PostView = ({
  children,
  currentUser,
  hideCommentButton,
  post,
  subjectLine,
  header,
}: {
  children?: React.ReactNode;
  header: React.ReactNode;
  subjectLine?: React.ReactNode;
  currentUser: UserType;
  hideCommentButton?: boolean;
  post: PostType;
}) => {
  const bodyPx = 8;

  return (
    <>
      <Stack spacing={2} py="2" textAlign="left">
        {header}
        {subjectLine && <Box px={bodyPx}>{subjectLine}</Box>}
        <Text px={bodyPx} pb={1} wordBreak="break-word" fontSize="md">
          {post.text}
        </Text>
        <Box px={bodyPx - 2} pb={1}>
          <Actions
            user={currentUser}
            post={post}
            hideCommentButton={hideCommentButton}
          />
        </Box>
      </Stack>
      <Divider />
      {children}
    </>
  );
};

export default PostView;
