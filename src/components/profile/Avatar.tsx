import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import { DocumentData } from "firebase/firestore";

export default function Avatar({
  overrideAvatar,
  size = "lg",
  user,
}: {
  overrideAvatar?: string;
  size?: string;
  user: DocumentData;
}) {
  return (
    <ChakraAvatar
      as={Link}
      to={`${ROUTES.PROTECTED}/${user.id}`}
      name={user.username}
      size={size}
      src={overrideAvatar || user.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    />
  );
}
