import { ToastPosition } from "@chakra-ui/react";

const PROTECTED = "/members-only";

export const ROUTES = {
  PROTECTED,
  ROOT: "/",
  HOME: "/",
  LOGIN: "/login",
  PROFILE: PROTECTED + "/u",
  HIGHEST_RATED: PROTECTED + "/top-users",
  POST: PROTECTED + "/post",
  ADD_REVIEW: PROTECTED + "/review",
  SEARCH: PROTECTED + "/search",
  EDIT_PROFILE: PROTECTED + "/edit-profile",
  NOTIFICATIONS: PROTECTED + "/notifications",
  // MEMBERS: PROTECTED + "/search-members",
  IQ_TEST: PROTECTED + "/iq-test",
  POSTS: PROTECTED + "/ideas",
};

export const TOAST_PROPS: {
  duration: number;
  isClosable: boolean;
  position?: ToastPosition;
  colorScheme?: string;
} = {
  duration: 2000,
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
