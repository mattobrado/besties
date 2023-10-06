import { Text } from "@chakra-ui/react";
import Avatar from "../profile/Avatar";
import { UserType } from "../../lib/types";

const AvatarAndFullNameLink = ({
  user,
  size,
}: {
  user: UserType;
  size: string;
}) => (
  <>
    <Avatar user={user} size={size} />
    <Text fontSize={size}>
      <b>{user.fullName}</b>
    </Text>
  </>
);

export default AvatarAndFullNameLink;
