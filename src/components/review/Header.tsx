import { Box, HStack, Skeleton, Text } from "@chakra-ui/react";
// import UsernameButton from "components/profile/UsernameButton";
import Avatar from "../profile/Avatar";
import { ReviewType } from "../../lib/types";
import { useUser } from "../../hooks/userHooks";
import { CONTENT } from "../../lib/content";

const Header = ({ review }: { review: ReviewType }) => {
  const { reviewerId, revieweeId, date } = review;
  const { user: reviewer } = useUser(reviewerId);

  return reviewer ? (
    <HStack>
      <Avatar user={reviewer} size="xs" />
      <Text fontSize={"xs"}>
        <b>{reviewer.fullName}</b> {CONTENT.REVIEW.reviewed}
      </Text>
      <Avatar user={reviewer} size="xs" />
      <Box bg={"blue"} alignItems={"right"}></Box>
    </HStack>
  ) : (
    <Skeleton />
  );
};

export default Header;
