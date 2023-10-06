import { Box, Divider, Text } from "@chakra-ui/react";
import Review from "./Review";
import { ReviewType } from "../../lib/types";

export default function ReviewList({ reviews }: { reviews: ReviewType[] }) {
  return (
    <Box alignContent={"center"}>
      {reviews?.length === 0 ? (
        <Text textAlign="center" fontSize="xl">
          no reviews yet... feeling a little lonely here
        </Text>
      ) : (
        reviews?.map((review) => (
          <div key={review.id}>
            <Review review={review} />
            <Divider />
          </div>
        ))
      )}
    </Box>
  );
}
