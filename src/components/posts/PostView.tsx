import { Box, Divider, HStack, Skeleton, Stack, Text } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import Actions from "./Actions";
import { PostType, UserType } from "../../lib/types";

const PostView = ({
  children,
  currentUser,
  date,
  hideCommentButton,
  post,
  subjectLineText,
  text,
  header,
}: {
  children?: React.ReactNode;
  header: React.ReactNode;
  currentUser: UserType;
  date: number;
  hideCommentButton?: boolean;
  post: PostType;
  subjectLineText: string;
  text: string;
}) => {
  const bodyPx = 8;

  return (
    <>
      <Box py="2" textAlign="left">
        {header}
        <Stack spacing={2}>
          <HStack px={bodyPx} fontSize="sm">
            <Text>{subjectLineText}</Text>
            <Text color="gray.500">{formatDistanceToNow(date)} ago</Text>
          </HStack>
          <Text px={bodyPx} pb={2} wordBreak="break-word" fontSize="md">
            {text}
          </Text>
          <Box px={bodyPx - 2} pb={1}>
            <Actions
              user={currentUser}
              post={post}
              hideCommentButton={hideCommentButton}
            />
          </Box>
        </Stack>
      </Box>
      <Divider />
      {children}
    </>
  );
};

export default PostView;
