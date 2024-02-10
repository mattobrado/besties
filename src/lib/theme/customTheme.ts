import { extendTheme } from "@chakra-ui/react";
import bottomNavigationTheme from "./bottomNavigationTheme";

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
  },

  layerStyles: {
    white: {
      color: "white",
    },
    black: {
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
