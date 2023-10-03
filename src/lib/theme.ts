import {
  baseTheme,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { withDefaultStyles } from "chakra-ui-bottom-navigation";

export const COLORS = {
  bg: "black",
  nav: "black",
  text: "white",
  accent: "pink.500",
};

const bottomNavigationOverrides = {
  parts: ["Box", "container", "item", "label", "icon"],
  baseStyle: {
    container: {
      position: "fixed",
      display: "flex",
      justifyContent: "space-between",
    },
    item: {
      flex: 1,
      opacity: 1,
      _selected: {
        opacity: 1,
      },
    },
  },
};

const MyBottomNavigation = withDefaultStyles(bottomNavigationOverrides);

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: "brand" }),
  {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
    colors: {
      brand: baseTheme.colors.pink,
    },
    components: {
      BottomNavigation: MyBottomNavigation,
    },
    styles: {
      global: (props: any) => ({
        body: {
          bg: COLORS.bg,
        },
      }),
    },
  }
);
