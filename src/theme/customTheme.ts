import { extendTheme } from "@chakra-ui/react";
import { spinnerTheme } from "./spinnerTheme";
import menuTheme from "./menuTheme";
import bottomNavigationTheme from "./bottomNavigationTheme";
import { buttonTheme } from "./buttonTheme";
import { skeletonTheme } from "./skeletonTheme";

export const customTheme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    pink: {
      "50": "#FEE7EE",
      "100": "#FCBBCF",
      "200": "#FA8FB0",
      "300": "#F86390",
      "400": "#F63771",
      "500": "#F40B52",
      "600": "#C30942",
      "700": "#920731",
      "800": "#620421",
      "900": "#310210",
    },
  },

  components: {
    BottomNavigation: bottomNavigationTheme,
    Button: buttonTheme,
    Menu: menuTheme,
    Spinner: spinnerTheme,
    Skeleton: skeletonTheme,
  },

  layerStyles: {
    white: {
      bg: "black",
      color: "white",
    },
    black: {
      bg: "white",
      color: "black",
    },
  },
  styles: {
    global: () => ({
      // Optionally set global CSS styles
      body: {
        bg: "black",
      },
    }),
  },
});
