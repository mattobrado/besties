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
  // MEMBERS: PROTECTED + "/search-members",
  IQ_TEST,
  REGISTRATION: IQ_TEST + "/questions",
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
  { subject: "Mathematics", topic: "Gödel's incompleteness theorems" },
  { subject: "Business", topic: "Tesla stock" },
  { subject: "Economics", topic: "China" },
  { subject: "Archeology", topic: "what dinosaur's really looked like" },
  { subject: "History", topic: "World War II" },
  { subject: "Anthropology", topic: "hunter-gatherer societies" },
  { subject: "Art", topic: "Picasso" },
  { subject: "Literature", topic: "which book is best" },
  { subject: "Music", topic: "Kanye West" },
  { subject: "Film", topic: "A24" },
  { subject: "Physics", topic: "particle-wave duality" },
  { subject: "Neurology", topic: "" },
  { subject: "Chemistry", topic: "the healing power of chemicals" },
  { subject: "Astronomy", topic: "UFOs" },
  { subject: "Technology", topic: "AI" },
  { subject: "Architecture", topic: "Freedom tower" },
  { subject: "Geology", topic: "rocks" },
  { subject: "Biology", topic: "bacteria" },
  { subject: "Zoology", topic: "deep sea animals" },
  { subject: "Medicine", topic: "pandemics" },
  { subject: "Government", topic: "the future of the United States" },
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
