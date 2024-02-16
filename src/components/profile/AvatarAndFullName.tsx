import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Avatar } from "src/components/profile";
import { ROUTES, type UserType } from "src/lib";

export const AvatarAndFullName = ({
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
