import { BESTIES_CONTENT } from "src/lib";

const THE_GENIUS_PROGRAM_CONTENT = {
  ...BESTIES_CONTENT,
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
};

export default THE_GENIUS_PROGRAM_CONTENT;
