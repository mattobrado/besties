import { Box, Text } from "@chakra-ui/react";
import { ReviewType } from "../../lib/types";
import Header from "./Header";

const Review = ({ review }: { review: ReviewType }) => {
  const { text } = review;
  return (
    <Box py="2" maxW="600px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        <Header review={review} />

        <Box p="2" minH="100px">
          <Text wordBreak="break-word" fontSize="md">
            {text}
          </Text>
        </Box>

        {/* <Actions review={review} /> */}
      </Box>
    </Box>
  );
};

export default Review;
