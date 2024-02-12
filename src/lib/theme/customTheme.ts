import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./button";
import { drawerTheme } from "./drawer";

export const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  components: { Drawer: drawerTheme, Button: buttonTheme },

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

  styles: {
    global: (props: { colorMode: string }) => ({
      "html, body": {
        fontSize: "sm",
        color: props.colorMode === "dark" ? "white" : "black",
        bg: props.colorMode === "dark" ? "black" : "white",
        lineHeight: "tall",
      },
      h2: { color: "pink.500" },
    }),
  },
});

export default customTheme;
