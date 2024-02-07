// import { ROUTES } from "../constants";
import { ROUTES } from "../constants";
import { bestiesContent } from "./bestiesContent";
import { THE_GENIUS_PROGRAM_CONTENT } from "./theGeniusProgramContent";

const THE_GENIUS_PROGRAM_CONFIG = {
  showBottomNavBar: false,
  showPostsOnHomeScreen: false,
  navBarItems: [
    { label: "ABOUT US", to: "" },
    {
      label: "GENIUS IQ TEST",
      to: ROUTES.IQ_TEST,
      state: {
        toastTitle: "You must be logged in to take the Genius IQ Test",
      },
    },
    {
      label: "MEMBERS",
      to: ROUTES.SEARCH,
      state: {
        toastTitle: "You must be logged in to access the members-only area",
      },
    },
    // { label: bestiesContent.navBar.mostPopular, to: ROUTES.HOME },
    // { label: bestiesContent.navBar.highestRated, to: ROUTES.HIGHEST_RATED },
    { label: "Log out", isLogout: true },
  ],
};

export default THE_GENIUS_PROGRAM_CONFIG;
