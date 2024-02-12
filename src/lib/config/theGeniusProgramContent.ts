const PROTECTED = "/members-only";
const REGISTER = "/iq-test";

export const ROUTES = {
  PROTECTED,
  ROOT: "/",
  HOME: "/",
  LOGIN: "/login",
  MEMBERS: PROTECTED,
  PROFILE: PROTECTED + "/u",
  HIGHEST_RATED: PROTECTED + "/top-users",
  POST: PROTECTED + "/post",
  ADD_REVIEW: PROTECTED + "/review",
  EDIT_PROFILE: PROTECTED + "/edit-profile",
  NOTIFICATIONS: PROTECTED + "/notifications",
  REGISTER: REGISTER,
  REGISTRATION: REGISTER + "/questions",
  APPLICATION_STATUS: "/applicant",
  POSTS: PROTECTED + "/ideas",
};

export const THE_GENIUS_PROGRAM_CONTENT = {
  starEmoji: "⭐️",
  editEmoji: "✏️",
  noActivity: "no activity yet...",
  cancel: "Cancel",
  delete: "Delete",

  loginLogo: undefined,
  auth: {
    appName: "The Genius Program",
    login: "Log in",
    phoneNumberPlaceHolder: "Phone number",
    loggingIn: "Logging in",
    fullName: "Name",
    favoriteSong: "Favorite song",
    favoriteSongPlaceholder: "Paste Spotify link",
    changeAvatar: "Change avatar",
    pleaseEnterName: "Name can't be blank",
    bio: "Bio",
    next: "Next",
    emailAddress: "Email",
    signupFailed: "Registration failed",
    pleaseEnterAnEmailAddress: "Please enter an email address",
    pleaseEnterUsername: "Please enter a username",
    pleaseEnterPassword: "Please enter password",
    invalidEmailAddress: "Email address is not valid",
    invalidPassword: "Password must be at least 8 characters long",
    usernameMinLength: "Username must be at least 1 characters long",
    fullNameMinLength: "Name must be at least 1 character long",
    fullNameAlphaNumeric: "Name must be alphanumeric",
    usernameAlphaNumeric: "username must be alphanumeric",
  },
  navBar: {
    logoSrcURL:
      "https://firebasestorage.googleapis.com/v0/b/myplace-618e9.appspot.com/o/assets%2Fthe-genius-program-high-resolution-logo-transparent.png?alt=media&token=438f09bb-bc6d-4413-9c2b-87fb226a72fb",
    logOut: "Log out",
    items: [
      { id: "home", label: "ABOUT US", to: "/" },
      {
        id: "register",
        label: "GENIUS IQ TEST",
        to: ROUTES.REGISTER,
        authorizationRejectionMessage:
          "You must be logged in to take the Genius IQ Test",
      },
      {
        id: "members",
        label: "MEMBERS",
        to: ROUTES.MEMBERS,
        authorizationRejectionMessage:
          "You must be logged in to access the members-only area",
      },
      {
        id: "application-status",
        label: "Check application status",
        to: ROUTES.APPLICATION_STATUS,
        authorizationRejectionMessage:
          "You must be logged in to access the applicant portal",
        isForAuthorizedUsersOnly: true,
      },
      {
        id: "logout",
        label: "LOG OUT",
        isLogout: true,
        isForAuthorizedUsersOnly: true,
      },
    ],
  },
  commentForm: { commentField: "write a comment" },
  home: {
    homeScreenImage:
      "https://firebasestorage.googleapis.com/v0/b/myplace-618e9.appspot.com/o/assets%2FImageForArticle_2310_16611751753395783.webp?alt=media&token=8726fc79-bd09-40df-9846-643ee9818928",
    heading: "Welcome to The Genius Program",
    altText: "Home",
  },
  lists: {
    search: "Search for a genius",
    highestRatedHeading: "Best people",
  },
  schoolSubjects: [
    {
      profession: "Anthropologist",
      subject: "Anthropology",
      topic: "hunter-gatherer societies",
    },
    {
      profession: "Archeologist",
      subject: "Archeology",
      topic: "what dinosaur's really looked like",
    },
    {
      profession: "Architect",
      subject: "Architecture",
      topic: "The Sydney Opera House",
    },
    { profession: "Artist", subject: "Art", topic: "the point of art" },
    { profession: "Astronomer", subject: "Astronomy", topic: "UFOs" },
    { profession: "Biologist", subject: "Biology", topic: "gene editing" },
    {
      profession: "Business leader",
      subject: "Business",
      topic: "Tesla stock",
    },
    { profession: "Chemist", subject: "Chemistry", topic: "DNA" },
    { profession: "Economist", subject: "Economics", topic: "China" },
    { profession: "Filmmaker", subject: "Film", topic: "A24" },
    { profession: "Geologist", subject: "Geology", topic: "rocks" },
    {
      profession: "Political leader",
      subject: "Government",
      topic: "the future of the United States",
    },
    { profession: "Historian", subject: "History", topic: "World War II" },
    { profession: "", subject: "Literature", topic: "which book is best" },
    {
      profession: "Mathematician",
      subject: "Mathematics",
      topic: "Gödel's incompleteness theorems",
    },
    {
      profession: "Medical professional",
      subject: "Medicine",
      topic: "pandemics",
    },
    { profession: "Musician", subject: "Music", topic: "Kanye West" },
    { profession: "Neurologist", subject: "Neurology", topic: "the brain" },
    {
      profession: "Physicist",
      subject: "Physics",
      topic: "particle-wave duality",
    },
    { profession: "Technologist", subject: "Technology", topic: "AI" },
    { profession: "Zoologist", subject: "Zoology", topic: "deep sea animals" },
    {
      profession: "Psychologist",
      subject: "Psychology",
      topic: "consciousness",
    },
    {
      profession: "Philosopher",
      subject: "Philosophy",
      topic: "the mind vs. the body",
    },
  ]
    .sort()
    .concat({ profession: "professional", subject: "Other", topic: "life" }),
  agreementLevels: ["1 Not like me", "2", "3", "4", "5", "6", "7 Like me"],
  post: {
    reviewed: "reviewed",
    deleteReviewHeading: "Delete review",
    deleteReviewBody: "Are you sure?",
    ago: "ago",
    submitButtonText: "Post",
    submitButtonLoadingText: "Posting...",
  },
  newPost: {
    revieweeField: "Who are you reviewing?",

    reviewField: "What do we need to know?",
    fieldRequired: "Required",
    reviewMinLength: "Review must be at least 1 character long",
    reviewMaxLength: "Review must be less than 280 characters",
  },
};

export const VALIDATE = {
  EMAIL: {
    required: {
      value: true,
      message: THE_GENIUS_PROGRAM_CONTENT.auth.pleaseEnterAnEmailAddress,
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: THE_GENIUS_PROGRAM_CONTENT.auth.invalidEmailAddress,
    },
  },
  PASSWORD: {
    required: {
      value: true,
      message: THE_GENIUS_PROGRAM_CONTENT.auth.pleaseEnterPassword,
    },
    minLength: {
      value: 6,
      message: THE_GENIUS_PROGRAM_CONTENT.auth.invalidPassword,
    },
  },
  USERNAME: {
    required: {
      value: true,
      message: THE_GENIUS_PROGRAM_CONTENT.auth.pleaseEnterUsername,
    },
    minLength: {
      value: 1,
      message: THE_GENIUS_PROGRAM_CONTENT.auth.usernameMinLength,
    },
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: THE_GENIUS_PROGRAM_CONTENT.auth.usernameAlphaNumeric,
    },
  },
  FULL_NAME_REQUIRED: {
    required: {
      value: true,
      message: THE_GENIUS_PROGRAM_CONTENT.auth.pleaseEnterName,
    },
    minLength: {
      value: 1,
      message: THE_GENIUS_PROGRAM_CONTENT.auth.fullNameMinLength,
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
      message: THE_GENIUS_PROGRAM_CONTENT.auth.pleaseEnterName,
    },
    minLength: {
      value: 1,
      message: THE_GENIUS_PROGRAM_CONTENT.auth.fullNameMinLength,
    },
  },
  TEXT: {
    required: {
      value: true,
      message: "Please write your thoughts",
    },
    minLength: {
      value: 1,
      message: THE_GENIUS_PROGRAM_CONTENT.newPost.reviewMinLength,
    },
    maxLength: {
      value: 280,
      message: THE_GENIUS_PROGRAM_CONTENT.newPost.reviewMaxLength,
    },
  },
};
