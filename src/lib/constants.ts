import { ToastPosition } from "@chakra-ui/react";

const PROTECTED = "/members-only";
const IQ_TEST = "/iq-test";

export const ROUTES = {
  PROTECTED,
  ROOT: "/",
  HOME: "/",
  LOGIN: "/login",
  PROFILE: PROTECTED + "/u",
  HIGHEST_RATED: PROTECTED + "/top-users",
  POST: PROTECTED + "/post",
  ADD_REVIEW: PROTECTED + "/review",
  SEARCH: PROTECTED + "/search",
  EDIT_PROFILE: PROTECTED + "/edit-profile",
  NOTIFICATIONS: PROTECTED + "/notifications",
  IQ_TEST,
  REGISTRATION: IQ_TEST + "/questions",
  APPLICANT: "/applicant",
  POSTS: PROTECTED + "/ideas",
};

export const TOAST_PROPS: {
  duration?: number;
  isClosable: boolean;
  position?: ToastPosition;
  colorScheme?: string;
} = {
  isClosable: true,
};

export enum COLLECTIONS {
  USERS = "users",
  POSTS = "posts",
}

export const GLOBAL_PX = 0;
export const POST_HEADER_SIZE = "sm";
export const ACTION_ICON_SIZE = "lg";
export const BOTTOM_NAV_HEIGHT = 24;
export const LOGO_HEIGHT = "75px";
export const NUM_ITEMS_OUT_OF_HAMBURGER = 3;

export const schoolSubjects = [
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
  { profession: "Business leader", subject: "Business", topic: "Tesla stock" },
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
  { profession: "Psychologist", subject: "Psychology", topic: "consciousness" },
]
  .sort()
  .concat({ profession: "professional", subject: "Other", topic: "life" });

export const agreementLevels = [
  "1 Not like me",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7 Like me",
];
