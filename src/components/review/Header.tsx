import { Box, HStack, Text } from "@chakra-ui/react";
import { UserType } from "../../lib/types";
import { content } from "../../lib/content";
import AvatarAndFullName from "../profile/AvatarAndFullName";

const Header = ({
  reviewer,
  reviewee,
}: {
  reviewer: UserType;
  reviewee: UserType;
}) => {
  const size = "xs";
  return (
    <HStack>
      <AvatarAndFullName user={reviewer} size={size} />
      <Text fontSize={size}>{content.review.reviewed}</Text>
      <AvatarAndFullName user={reviewee} size={size} />
      <Box bg={"blue"} alignItems={"right"}></Box>
    </HStack>
  );
};

export default Header;
