import { Box, Divider, HStack, Skeleton, Stack, Text } from "@chakra-ui/react";
import { PostType } from "../../lib/types";
import ReviewHeader from "./ReviewHeader";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "../../hooks/userHooks";
import getStars from "../../utils/getStars";

const Review = ({ review }: { review: PostType }) => {
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
          <Stack>
            {isLoaded && (
              <ReviewHeader reviewer={reviewer} reviewee={reviewee} />
            )}
            <HStack px={bodyPx} fontSize="sm">
              <Text>{getStars(rating)}</Text>
              <Text color="gray.500">{formatDistanceToNow(date)} ago</Text>
            </HStack>
          </Stack>
          <Box py="2" px={bodyPx}>
            <Text wordBreak="break-word" fontSize="md">
              {text}
            </Text>
          </Box>

          {/* <Actions review={review} /> */}
        </Box>
      </Box>
      <Divider />
    </Skeleton>
  );
};

export default Review;
