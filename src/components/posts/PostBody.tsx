import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import { Actions } from "src/components/posts";
import type { PostType } from "src/lib";

export const PostBody = ({
  children,
  hideCommentButton,
  post,
  subjectLine,
  header,
}: {
  children?: React.ReactNode;
  header: React.ReactNode;
  subjectLine?: React.ReactNode;
  hideCommentButton?: boolean;
  post: PostType;
}) => {
  const bodyPx = 10;

  return (
    <>
      <Stack spacing={2} py="2" textAlign="left">
        {header}
        {subjectLine && <Box px={bodyPx}>{subjectLine}</Box>}
        <Text px={bodyPx} pb={1} wordBreak="break-word" fontSize="xl">
          {post.text}
        </Text>
        <Box px={bodyPx - 2} pb={1}>
          <Actions post={post} hideCommentButton={hideCommentButton} />
        </Box>
      </Stack>
      <Divider />
      {children}
    </>
  );
};
