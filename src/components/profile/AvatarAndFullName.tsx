import { HStack, Text } from "@chakra-ui/react";
import type { UserType } from "src/lib/types/index";
import { Link } from "react-router-dom";
import { ROUTES } from "src/lib/constants";
import { Avatar } from "src/components/profile";

const AvatarAndFullName = ({
  user,
  size,
  isLink = true,
}: {
  user: UserType;
  size: string;
  isLink?: boolean;
}) => (
  <HStack
    as={isLink ? Link : undefined}
    to={isLink ? `${ROUTES.PROFILE}/${user.id}` : undefined}
  >
    <Avatar user={user} avatarProps={{ size }} isLink={false} />
    <Text fontSize={size}>
      <b>{user?.fullName}</b>
    </Text>
  </HStack>
);

export default AvatarAndFullName;
