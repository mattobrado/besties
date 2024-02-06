import { ROUTES } from "../constants";
import { bestiesContent } from "./bestiesContent";

const THE_GENIUS_PROGRAM_CONFIG = {
  showBottomNavBar: false,
  navBarItems: [
    { label: "ABOUT US", to: "" },
    { label: "GENIUS IQ TEST", to: "" },
    { label: "MEMBERS", to: "" },
    { label: bestiesContent.navBar.mostPopular, to: ROUTES.HOME },
    { label: bestiesContent.navBar.highestRated, to: ROUTES.HIGHEST_RATED },
    { label: bestiesContent.navBar.logOut, isLogout: true },
  ],
};

export default THE_GENIUS_PROGRAM_CONFIG;
