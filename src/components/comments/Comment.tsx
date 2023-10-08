import { Box, Divider, HStack, Skeleton, Stack, Text } from "@chakra-ui/react";
import { PostType, UserType } from "../../lib/types";
import { formatDistanceToNow } from "date-fns";
import Actions from "../posts/Actions";
import { useUser } from "../../hooks/userHooks";
import AvatarAndFullName from "../profile/AvatarAndFullName";

const Comment = ({
  post,
  user,
  children,
}: {
  post: PostType;
  user: UserType;
  children?: React.ReactNode;
  hideCommentButton?: boolean;
}) => {
  const { text, date, posterUid: uid, rating } = post;
  const { user: poster } = useUser(uid);

  const bodyPx = 8;
  const isLoaded = !!poster;
  return (
    <Skeleton
      startColor="transparent"
      endColor="transparent"
      isLoaded={isLoaded}
    >
      <Box py="2" textAlign="left">
        <Box>
          {isLoaded && (
            <HStack>
              <AvatarAndFullName user={poster} size={"xs"} />{" "}
              <Text fontSize={"xs"} color="gray.500">
                {formatDistanceToNow(date)} ago
              </Text>
            </HStack>
          )}
          <Stack spacing={2}>
            <HStack px={bodyPx} fontSize="sm"></HStack>
            <Text px={bodyPx} pb={2} wordBreak="break-word" fontSize="md">
              {text}
            </Text>
            <Box px={bodyPx - 2} pb={1}>
              <Actions user={user} post={post} hideCommentButton={true} />
            </Box>
          </Stack>
        </Box>
      </Box>
      <Divider />
      {children}
    </Skeleton>
  );
};

export default Comment;
