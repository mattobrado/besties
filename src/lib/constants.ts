import { ToastPosition } from "@chakra-ui/react";
import { CONTENT } from "./content";

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
      message: "please enter username",
    },
    minLength: {
      value: 6,
      message: "username must be at least 6 characters long",
    },
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: "username must be alphanumeric",
    },
  },
  FULL_NAME: {
    required: {
      value: true,
      message: "please enter your name",
    },
    minLength: {
      value: 1,
      message: "name must be at least 1 character long",
    },
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: "name must be alphanumeric",
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
