import { content } from "./content";

export const INPUT_TYPE = {
  EMAIL: "email",
  PASSWORD: "password",
  USERNAME: "username",
  FULL_NAME: "fullName",
  TEL: "tel",
  ONE_TIME_PASS_CODE: "otp",
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
      message: content.auth.pleaseEnterUsername,
    },
    minLength: {
      value: 1,
      message: content.auth.usernameMinLength,
    },
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: content.auth.usernameAlphaNumeric,
    },
  },
  FULL_NAME: {
    required: {
      value: true,
      message: content.auth.pleaseEnterName,
    },
    minLength: {
      value: 1,
      message: content.auth.fullNameMinLength,
    },
  },
  TEXT: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 1,
      message: content.reviewForm.reviewMinLength,
    },
    maxLength: {
      value: 280,
      message: content.reviewForm.reviewMaxLength,
    },
  },
};
