import { ToastPosition } from "@chakra-ui/react";
import { COLORS } from "../theme/colors";

export const TOAST_PROPS: {
  duration: number;
  isClosable: boolean;
  position: ToastPosition;
  colorScheme: string;
} = {
  duration: 3000,
  isClosable: true,
  position: "top",
  colorScheme: COLORS.COLOR_SCHEME,
};

export const COLLECTIONS = {
  USERS: "users",
  POSTS: "posts",
};

export const GLOBAL_PX = 4;
