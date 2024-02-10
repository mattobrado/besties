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
  { subject: "Anthropology", topic: "hunter-gatherer societies" },
  { subject: "Archeology", topic: "what dinosaur's really looked like" },
  { subject: "Architecture", topic: "The Sydney Opera House" },
  { subject: "Art", topic: "Picasso" },
  { subject: "Astronomy", topic: "UFOs" },
  { subject: "Biology", topic: "gene editing" },
  { subject: "Business", topic: "Tesla stock" },
  { subject: "Chemistry", topic: "DNA" },
  { subject: "Economics", topic: "China" },
  { subject: "Film", topic: "A24" },
  { subject: "Geology", topic: "rocks" },
  { subject: "Government", topic: "the future of the United States" },
  { subject: "History", topic: "World War II" },
  { subject: "Literature", topic: "which book is best" },
  { subject: "Mathematics", topic: "Gödel's incompleteness theorems" },
  { subject: "Medicine", topic: "pandemics" },
  { subject: "Music", topic: "Kanye West" },
  { subject: "Neurology", topic: "" },
  { subject: "Physics", topic: "particle-wave duality" },
  { subject: "Technology", topic: "AI" },
  { subject: "Zoology", topic: "deep sea animals" },
];

export const agreementLevels = [
  "1 Not like me",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7 like me",
];
