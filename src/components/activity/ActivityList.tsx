import { Box, Text } from "@chakra-ui/react";
import { ReviewType } from "../../lib/types";
import Review from "./Review";
import { content } from "../../lib/content";

export default function ActivityList({ reviews }: { reviews: ReviewType[] }) {
  return (
    <Box alignContent={"center"}>
      {reviews?.length === 0 ? (
        <Text textAlign="center" fontSize="xl">
          {content.activity.noActivity}
        </Text>
      ) : (
        reviews?.map((review) => <Review key={review.id} review={review} />)
      )}
    </Box>
  );
}
