import { Avatar as ChakraAvatar, SkeletonCircle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import { DocumentData } from "firebase/firestore";
import { colors } from "../../theme/colors";

const Avatar = ({
  overrideAvatar,
  size = "lg",
  user,
}: {
  overrideAvatar?: string;
  size?: string;
  user?: DocumentData;
}) => {
  return user ? (
    <ChakraAvatar
      as={Link}
      to={`${ROUTES.PROTECTED}/${user.id}`}
      name={user.username}
      size={size}
      src={overrideAvatar || user.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
      bg={colors.brand}
    />
  ) : (
    <SkeletonCircle variant="brand" size={size === "lg" ? "16" : size} />
  );
};

export default Avatar;
