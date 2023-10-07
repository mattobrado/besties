import { Box, Divider, HStack, Skeleton, Stack, Text } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import Actions from "./Actions";
import ReviewHeader from "./ReviewHeader";
import { PostType, UserType } from "../../lib/types";
import { useUser } from "../../hooks/userHooks";

const PostView = ({
  children,
  currentUser,
  date,
  hideCommentButton,
  post,
  revieweeId,
  reviewerId,
  subjectLineText,
  text,
}: {
  children?: React.ReactNode;
  currentUser: UserType;
  date: number;
  hideCommentButton?: boolean;
  post: PostType;
  revieweeId: string;
  reviewerId: string;
  subjectLineText: string;
  text: string;
}) => {
  const { user: reviewer } = useUser(reviewerId);
  const { user: reviewee } = useUser(revieweeId);
  const bodyPx = 8;
  const isLoaded = !!reviewer && !!reviewee;

  return (
    <Skeleton
      startColor="transparent"
      endColor="transparent"
      isLoaded={isLoaded}
    >
      <Box py="2" textAlign="left">
        <Box>
          {isLoaded && <ReviewHeader reviewer={reviewer} reviewee={reviewee} />}
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
      </Box>
      <Divider />
      {children}
    </Skeleton>
  );
};

export default PostView;
