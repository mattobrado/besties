import { Box, Divider, HStack, Skeleton, Stack, Text } from "@chakra-ui/react";
import { PostType, UserType } from "../../lib/types";
import ReviewHeader from "./ReviewHeader";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "../../hooks/userHooks";
import getStars from "../../utils/getStars";
import Actions from "./Actions";

const Review = ({ review, user }: { review: PostType; user: UserType }) => {
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
          <Stack py="" px={bodyPx}>
            <HStack fontSize="sm">
              <Text>{getStars(rating)}</Text>
              <Text color="gray.500">{formatDistanceToNow(date)} ago</Text>
            </HStack>
            <Text wordBreak="break-word" fontSize="md" pb={1}>
              {text}
            </Text>
            <Actions user={user} post={review} />
          </Stack>
        </Box>
      </Box>
      <Divider />
    </Skeleton>
  );
};

export default Review;
