import { Box, HStack, Skeleton, Text } from "@chakra-ui/react";
// import UsernameButton from "components/profile/UsernameButton";
import { ReviewType } from "../../lib/types";
import { useUser } from "../../hooks/userHooks";
import { CONTENT } from "../../lib/content";
import AvatarAndFullNameLink from "./AvatarAndFullNameLink";

const Header = ({ review }: { review: ReviewType }) => {
  const { reviewerId, revieweeId, date } = review;
  const { user: reviewer } = useUser(reviewerId);

  const size = "xs";
  return reviewer ? (
    <HStack>
      <AvatarAndFullNameLink user={reviewer} size={size} />
      <Text fontSize={size}>{CONTENT.REVIEW.reviewed}</Text>
      <AvatarAndFullNameLink user={reviewer} size={size} />
      <Box bg={"blue"} alignItems={"right"}></Box>
    </HStack>
  ) : (
    <Skeleton />
  );
};

export default Header;
