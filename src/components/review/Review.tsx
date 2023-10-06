import { Box, Divider, Skeleton, Stack, Text } from "@chakra-ui/react";
import { ReviewType } from "../../lib/types";
import Header from "./Header";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "../../hooks/userHooks";

const Review = ({ review }: { review: ReviewType }) => {
  const { text, date, reviewerId } = review;
  const { user: reviewer } = useUser(reviewerId);
  const { user: reviewee } = useUser(reviewerId);

  const bodyPx = 8;

  return (
    <Skeleton
      startColor="transparent"
      endColor="transparent"
      isLoaded={!!reviewer && !!reviewee}
    >
      <Box py="2" textAlign="left">
        <Box>
          <Stack>
            <Header reviewer={reviewer} reviewee={reviewee} />
            <Text px={bodyPx} fontSize="sm" color="gray.500">
              {formatDistanceToNow(date)} ago
            </Text>
          </Stack>
          <Box py="4" px={bodyPx}>
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
