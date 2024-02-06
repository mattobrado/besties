import { HStack, Text } from "@chakra-ui/react";
import Avatar from "./Avatar";
import { UserType } from "../../lib/types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/constants";

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
