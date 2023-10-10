import { Text } from "@chakra-ui/react";
import Avatar from "./Avatar";
import { UserType } from "../../lib/types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/routes";

const AvatarAndFullName = ({
  user,
  size,
}: {
  user: UserType;
  size: string;
}) => (
  <>
    <Avatar user={user} avatarProps={{ size }} />
    <Link to={`${ROUTES.PROTECTED}/${user.id}`}>
      <Text fontSize={size}>
        <b>{user?.fullName}</b>
      </Text>
    </Link>
  </>
);

export default AvatarAndFullName;
