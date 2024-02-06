import { bestiesContent } from "./content/bestiesContent";

export const INPUT_TYPE = {
  EMAIL: "email",
  PASSWORD: "password",
  USERNAME: "username",
  FULL_NAME: "fullName",
  TEL: "tel",
  ONE_TIME_PASS_CODE: "otp",
  SONG: "url",
  COLOR: "color",
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
      message: "required",
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
