import { ToastPosition } from "@chakra-ui/react";

export const TOAST_PROPS: {
  duration?: number;
  isClosable: boolean;
  position?: ToastPosition;
  colorScheme?: string;
} = {
  isClosable: true,
};

export enum COLLECTIONS {
  USERS = "users",
  POSTS = "posts",
}

export const GLOBAL_PX = 0;
export const POST_HEADER_SIZE = "sm";
export const ACTION_ICON_SIZE = "lg";
export const BOTTOM_NAV_HEIGHT = 24;
export const LOGO_HEIGHT = "75px";
export const NUM_ITEMS_OUT_OF_HAMBURGER = 3;

export const INPUT_TYPE = {
  EMAIL: "email",
  PASSWORD: "password",
  USERNAME: "username",
  FULL_NAME: "fullName",
  TEL: "tel",
  ONE_TIME_PASS_CODE: "otp",
  SONG: "url",
  COLOR: "color",
  BIO: "bio",
};
