import { ROUTES } from "../constants";

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
    { label: "Join us", to: ROUTES.IQ_TEST },
    // { label: "GENIUS", to: "" },
    // { label: bestiesContent.navBar.mostPopular, to: ROUTES.HOME },
    // { label: bestiesContent.navBar.highestRated, to: ROUTES.HIGHEST_RATED },
    { label: "LOG OUT", isLogout: true },
  ],
};

export default THE_GENIUS_PROGRAM_CONFIG;
