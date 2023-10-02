import { ToastPosition } from "@chakra-ui/react";
import { CONTENT } from "./content";

const PROTECTED = "/protected";

export const ROUTES = {
  COMMENTS: PROTECTED + "/comments/:id",
  HOME: PROTECTED + "/home",
  LOGIN: "/login",
  PROFILE: PROTECTED + "/profile/:id",
  PROTECTED,
  ROOT: "/",
  SIGNUP: "/signup",
  USERS: PROTECTED + "/users",
};

export const INPUT_TYPE = {
  EMAIL: "email",
  PASSWORD: "password",
  USERNAME: "username",
  FULL_NAME: "fullName",
};

export const VALIDATE = {
  EMAIL: {
    required: {
      value: true,
      message: CONTENT.AUTH.pleaseEnterAnEmailAddress,
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: CONTENT.AUTH.invalidEmailAddress,
    },
  },
  PASSWORD: {
    required: {
      value: true,
      message: CONTENT.AUTH.pleaseEnterPassword,
    },
    minLength: {
      value: 6,
      message: CONTENT.AUTH.invalidPassword,
    },
  },
  USERNAME: {
    required: {
      value: true,
      message: "Please enter username",
    },
    minLength: {
      value: 6,
      message: "Username must be at least 6 characters long",
    },
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: "Username must be alphanumeric",
    },
  },
};

export const TOAST_PROPS: {
  duration: number;
  isClosable: boolean;
  position: ToastPosition;
} = {
  duration: 3000,
  isClosable: true,
  position: "top",
};
