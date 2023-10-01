export const CONTENT = {
  appName: "besties 👯‍♂️",
  dontHaveAnAccount: "don't have an account?",
  emailAddress: "email",
  error: "error",
  forgotPassword: "forgot password?",
  goToLoginMessage: "Already have an account?",
  goToSignUpMessage: "No account yet?",
  heartEmoji: "🩷",
  invalidEmailAddress: "email address is not valid",
  invalidPassword: "password must be at least 8 characters long",
  loggingIn: "signing In",
  logIn: "sign in",
  logInToYourAccount: "log in to your account",
  logOut: "log out",
  orContinueWith: "or continue with",
  password: "password",
  pleaseEnterAnEmailAddress: "please enter an email address",
  pleaseEnterPassword: "please enter password",
  rememberMe: "remember me",
  signInToYourAccount: "sign in to your account",
  signUp: "sign up",
};

const PROTECTED = "/protected";

export const ROUTES = {
  LOGIN: "/login",
  PROTECTED,
  ROOT: "/",
  SIGN_UP: "/sign-up",
  HOME: PROTECTED + "/home",
};

export const TOAST_DURATION = 5000;

export const INPUT_TYPE = {
  EMAIL: "email",
  PASSWORD: "password",
};

export const VALIDATE = {
  EMAIL: {
    required: {
      value: true,
      message: "Please enter an email address",
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Email address is not valid",
    },
  },
  PASSWORD: {
    required: {
      value: true,
      message: "Please enter password",
    },
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long",
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
