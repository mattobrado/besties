import { ToastPosition } from "@chakra-ui/react";
import bestiesContent from "src/lib/config/bestiesContent";

const PROTECTED = "/members-only";
const IQ_TEST = "/iq-test";

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
  IQ_TEST,
  REGISTRATION: IQ_TEST + "/questions",
  APPLICANT: "/applicant",
  POSTS: PROTECTED + "/ideas",
};

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

export const VALIDATE = {
  EMAIL: {
    required: {
      value: true,
      message: bestiesContent.auth.pleaseEnterAnEmailAddress,
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: bestiesContent.auth.invalidEmailAddress,
    },
  },
  PASSWORD: {
    required: {
      value: true,
      message: bestiesContent.auth.pleaseEnterPassword,
    },
    minLength: {
      value: 6,
      message: bestiesContent.auth.invalidPassword,
    },
  },
  USERNAME: {
    required: {
      value: true,
      message: bestiesContent.auth.pleaseEnterUsername,
    },
    minLength: {
      value: 1,
      message: bestiesContent.auth.usernameMinLength,
    },
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: bestiesContent.auth.usernameAlphaNumeric,
    },
  },
  FULL_NAME_REQUIRED: {
    required: {
      value: true,
      message: bestiesContent.auth.pleaseEnterName,
    },
    minLength: {
      value: 1,
      message: bestiesContent.auth.fullNameMinLength,
    },
  },
  EMAIL_REQUIRED: {
    required: {
      value: true,
      message: "Please enter your email address",
    },
  },
  FULL_NAME: {
    required: {
      message: bestiesContent.auth.pleaseEnterName,
    },
    minLength: {
      value: 1,
      message: bestiesContent.auth.fullNameMinLength,
    },
  },
  TEXT: {
    required: {
      value: true,
      message: "Please write your thoughts",
    },
    minLength: {
      value: 1,
      message: bestiesContent.reviewForm.reviewMinLength,
    },
    maxLength: {
      value: 280,
      message: bestiesContent.reviewForm.reviewMaxLength,
    },
  },
};
export const NAV_BAR_ITEMS = [
  { label: "ABOUT US", to: "" },

  {
    label: "GENIUS IQ TEST",
    to: ROUTES.IQ_TEST,
    state: {
      toastTitle: "You must be logged in to take the Genius IQ Test",
    },
  },
  {
    label: "MEMBERS",
    to: ROUTES.SEARCH,
    state: {
      toastTitle: "You must be logged in to access the members-only area",
    },
  },
  {
    label: "Check application status",
    to: ROUTES.APPLICANT,
    state: {
      toastTitle: "You must be logged in to access the applicant portal",
    },
    isForAuthorizedUsersOnly: true,
  },
  { label: "Join us", to: ROUTES.IQ_TEST, isForGuestsOnly: true },
  {
    label: "Check application status",
    to: ROUTES.LOGIN,
    isForGuestsOnly: true,
  },
  // { label: "GENIUS", to: "" },
  // { label: bestiesContent.navBar.mostPopular, to: ROUTES.HOME },
  // { label: bestiesContent.navBar.highestRated, to: ROUTES.HIGHEST_RATED },
  { label: "LOG OUT", isLogout: true, isForAuthorizedUsersOnly: true },
];
