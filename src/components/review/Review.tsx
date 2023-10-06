import { Box, Divider, Skeleton, Text } from "@chakra-ui/react";
import { ReviewType } from "../../lib/types";
import Header from "./Header";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "../../hooks/userHooks";

const Review = ({ review }: { review: ReviewType }) => {
  const { text, date, reviewerId } = review;
  const { user: reviewer } = useUser(reviewerId);
  const { user: reviewee } = useUser(reviewerId);

  return (
    <Skeleton
      startColor="transparent"
      endColor="transparent"
      isLoaded={!!reviewer && !!reviewee}
    >
      <Box py="2" maxW="600px" textAlign="left">
        <Box>
          <Header reviewer={reviewer} reviewee={reviewee} />
          <Text fontSize="sm" color="gray.500">
            {formatDistanceToNow(date)} ago
          </Text>
          <Box p="4">
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
