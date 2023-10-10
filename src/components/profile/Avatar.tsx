import { AvatarProps, Avatar as ChakraAvatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import { COLORS } from "../../theme/colors";
import { UserType } from "../../lib/types";

const Avatar = ({
  user,
  avatarProps,
  children,
}: {
  user: UserType;
  avatarProps: AvatarProps;
  children?: React.ReactNode;
}) => {
  return (
    <ChakraAvatar
      as={Link}
      to={`${ROUTES.PROFILE}/${user.id}`}
      name={user.fullName}
      src={user.avatar}
      bg={COLORS.BRAND}
      color={COLORS.BACKGROUND}
      children={children}
      {...avatarProps}
    />
  );
};

export default Avatar;
