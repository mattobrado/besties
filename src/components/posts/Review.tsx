import { Box, Divider, HStack, Skeleton, Stack, Text } from "@chakra-ui/react";
import { PostType, UserType } from "../../lib/types";
import ReviewHeader from "./ReviewHeader";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "../../hooks/userHooks";
import getStars from "../../utils/getStars";
import Actions from "./Actions";

const Review = ({
  review,
  user,
  children,
  hideCommentButton,
}: {
  review: PostType;
  user: UserType;
  children: React.ReactNode;
  hideCommentButton?: boolean;
}) => {
  const { text, date, reviewerId, rating } = review;
  const { user: reviewer } = useUser(reviewerId);
  const { user: reviewee } = useUser(reviewerId);

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
              <Text>{getStars(rating)}</Text>
              <Text color="gray.500">{formatDistanceToNow(date)} ago</Text>
            </HStack>
            <Text px={bodyPx} pb={2} wordBreak="break-word" fontSize="md">
              {text}
            </Text>
            <Box px={bodyPx - 2} pb={1}>
              <Actions
                user={user}
                post={review}
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

export default Review;
