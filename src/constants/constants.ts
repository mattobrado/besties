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
  logo: "👯‍♂️",
  logOut: "log out",
  orContinueWith: "or continue with",
  password: "password",
  pleaseEnterAnEmailAddress: "please enter an email address",
  pleaseEnterPassword: "please enter password",
  rememberMe: "remember me",
  signInToYourAccount: "sign in to your account",
  signUp: "sign up",
};

export const PROTECTED = "/protected";

export const ROUTES = {
  COMMENTS: PROTECTED + "/comments/:id",
  HOME: PROTECTED + "/home",
  LOGIN: "/login",
  PROFILE: PROTECTED + "/profile/:id",
  PROTECTED,
  ROOT: "/",
  SIGN_UP: "/sign-up",
  USERS: PROTECTED + "/users",
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
      message: CONTENT.pleaseEnterAnEmailAddress,
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: CONTENT.invalidEmailAddress,
    },
  },
  PASSWORD: {
    required: {
      value: true,
      message: CONTENT.pleaseEnterPassword,
    },
    minLength: {
      value: 6,
      message: CONTENT.invalidPassword,
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
