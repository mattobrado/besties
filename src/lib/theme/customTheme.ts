import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./button";
import { drawerTheme } from "./drawer";

export const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  components: {
    Drawer: drawerTheme,
    Button: buttonTheme,
  },

  colors: {
    brand: {
      "50": "#F40B52",
      "100": "#F40B52",
      "200": "#F40B52",
      "300": "#F40B52",
      "400": "#F40B52",
      "500": "#F40B52",
      "600": "#F40B52",
      "700": "#F40B52",
      "800": "#F40B52",
      "900": "#F40B52",
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
    }),
  },
});

export default customTheme;
