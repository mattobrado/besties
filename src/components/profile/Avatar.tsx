import { Avatar as ChakraAvatar, SkeletonCircle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import { COLORS } from "../../theme/colors";
import { UserType } from "../../lib/types";

const Avatar = ({
  overrideAvatar,
  size,
  user,
}: {
  overrideAvatar?: string;
  size: string;
  user: UserType;
}) => {
  return (
    <ChakraAvatar
      as={Link}
      to={`${ROUTES.PROTECTED}/${user.id}`}
      name={user.fullName}
      size={size}
      src={overrideAvatar || user.avatar}
      bg={COLORS.BRAND}
    />
  );
};

export default Avatar;
