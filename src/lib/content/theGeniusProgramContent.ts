import { bestiesContent } from "./bestiesContent";

export const THE_GENIUS_PROGRAM_CONTENT = {
  ...bestiesContent,
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
  },
  navBar: {
    logoSrcURL:
      "https://firebasestorage.googleapis.com/v0/b/myplace-618e9.appspot.com/o/assets%2Fthe-genius-program-high-resolution-logo-transparent.png?alt=media&token=438f09bb-bc6d-4413-9c2b-87fb226a72fb",
    logOut: "Log out",
  },
  commentForm: { commentField: "write a comment" },
  home: {
    homeScreenImage:
      "https://firebasestorage.googleapis.com/v0/b/myplace-618e9.appspot.com/o/assets%2FImageForArticle_2310_16611751753395783.webp?alt=media&token=8726fc79-bd09-40df-9846-643ee9818928",
    heading: "Welcome to The Genius Program",
  },
  search: {
    search: "Search for a genius",
  },
};
