import { ToastPosition } from "@chakra-ui/react";

export const CONTENT = {
  AUTH: {
    appName: "besties 👯‍♂️",
    createAnAccount: "create an account",
    dontHaveAnAccount: "don't have an account?",
    emailAddress: "email",
    error: "error",
    forgotPassword: "forgot password?",
    fullName: "full name",
    goToLoginMessage: "already a user?",
    goToSignupMessage: "no account yet?",
    heartEmoji: "🩷",
    invalidEmailAddress: "email address is not valid",
    invalidPassword: "password must be at least 8 characters long",
    loggingIn: "signing In",
    login: "sign in",
    loginSuccess: "You are logged in",
    logInToYourAccount: "log in to your account",
    logo: "👯‍♂️",
    logOutSuccess: "successfully logged out",
    orContinueWith: "or continue with",
    password: "password",
    pleaseEnterAnEmailAddress: "please enter an email address",
    pleaseEnterPassword: "please enter password",
    rememberMe: "remember me",
    signingUp: "signing up",
    signInToYourAccount: "sign in to your account",
    signup: "sign up",
    signupFailed: "signing Up failed",
    signupSubtitle: "to enjoy all of our cool features ✌️",
    signupSuccess: "account created",
    username: "username",
    usernameTaken: "username already exists",
  },
  NAVBAR: {
    highestRated: "⭐️ highest rated",
    home: "Home",
    logOut: "log out",
    mostPopular: "🩷 most popular",
    seeAllUsers: "👤 make friends",
    myProfile: "my profile",
  },
};

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
