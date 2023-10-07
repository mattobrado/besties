import { ToastPosition } from "@chakra-ui/react";
import { content } from "./content";

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
      message: content.auth.pleaseEnterAnEmailAddress,
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: content.auth.invalidEmailAddress,
    },
  },
  PASSWORD: {
    required: {
      value: true,
      message: content.auth.pleaseEnterPassword,
    },
    minLength: {
      value: 6,
      message: content.auth.invalidPassword,
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
  REVIEW: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 1,
      message: "name must be at least 1 character long",
    },
    maxLength: {
      value: 280,
      message: "review must be less than 280 characters",
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
