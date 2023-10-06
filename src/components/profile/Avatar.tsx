import { Avatar as ChakraAvatar, SkeletonCircle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import { colors } from "../../theme/colors";
import { UserType } from "../../lib/types";

const Avatar = ({
  overrideAvatar,
  size = "lg",
  user,
}: {
  overrideAvatar?: string;
  size?: string;
  user?: UserType;
}) => {
  return user ? (
    <ChakraAvatar
      as={Link}
      to={`${ROUTES.PROTECTED}/${user.id}`}
      name={user.fullName}
      size={size}
      src={overrideAvatar || user.avatar}
      bg={colors.brand}
    />
  ) : (
    <SkeletonCircle variant="brand" size={size === "lg" ? "16" : size} />
  );
};

export default Avatar;
