import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
// import UsernameButton from "components/profile/UsernameButton";
import Avatar from "../profile/Avatar";
import { ReviewType } from "../../lib/types";
import { useUser } from "../../hooks/userHooks";
import { CONTENT } from "../../lib/content";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Header = ({ review }: { review: ReviewType }) => {
  const { reviewerId, revieweeId, date } = review;
  const { user } = useUser(reviewerId);

  return (
    <Flex alignItems="center" p="2">
      <Stack>
        <HStack>
          <Avatar user={user} size="md" />
          <Text>{CONTENT.REVIEW.directionEmoji}</Text>
          {/* <ArrowForwardIcon boxSize={4} /> */}
          <Avatar user={user} size="md" />
        </HStack>
        <Box ml="4">
          {/* <UsernameButton user={user} /> */}
          <Text fontSize="sm" color="gray.500">
            {formatDistanceToNow(date)} ago
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Header;
