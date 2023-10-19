import { AvatarProps, Avatar as ChakraAvatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import { UserType } from "../../lib/types";

const Avatar = ({
  user,
  avatarProps,
  children,
  overrideAvatar,
  isLink = true,
}: {
  user: UserType;
  avatarProps?: AvatarProps;
  children?: React.ReactNode;
  overrideAvatar?: string;
  isLink?: boolean;
}) => {
  return (
    <ChakraAvatar
      as={isLink ? Link : undefined}
      to={`${ROUTES.PROFILE}/${user.id}`}
      name={user.fullName}
      src={overrideAvatar ?? user.avatar}
      children={children}
      loading="lazy"
      {...avatarProps}
    />
  );
};

export default Avatar;
