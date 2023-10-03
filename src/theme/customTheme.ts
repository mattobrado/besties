// 1. Import `extendTheme`
import { createMultiStyleConfigHelpers, extendTheme } from "@chakra-ui/react";
import { withDefaultStyles } from "chakra-ui-bottom-navigation";
import { menuAnatomy } from "@chakra-ui/anatomy";

export const colors = {
  primaryFont: "white",
  bg: "black",
  brand: "pink.500",
};

const MyBottomNavigation = withDefaultStyles({
  parts: ["Box", "container", "item", "label", "icon"],
  baseStyle: {
    container: {
      position: "fixed",
      display: "flex",
      justifyContent: "space-between",
      bg: colors.bg,
    },
    item: {
      flex: 1,
      opacity: 1,
      _selected: {
        opacity: 1,
      },
    },
  },
});
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const menuStyle = definePartsStyle({
  // define the part you're going to style
  list: {
    // this will style the MenuList component
    py: "4",
    borderRadius: "xl",
    border: true,
    borderColor: colors.brand,
    bg: colors.bg,
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: colors.primaryFont,
    bg: colors.bg,
  },
  divider: {
    // this will style the MenuDivider component
    my: "4",
    borderWidth: "2px",
    borderColor: colors.brand,
  },
});

// export the base styles in the component theme
const menuTheme = defineMultiStyleConfig({ baseStyle: menuStyle });

// 3. Call `extendTheme` and pass your custom values
export const customTheme = extendTheme({
  colors: colors,

  components: {
    Text: {
      baseStyle: (props: any) => ({
        color: colors.primaryFont,
      }),
      variants: {
        // used as <Text variant="secondary">
        secondary: (props: any) => ({
          color: colors.primaryFont,
        }),
      },
    },
    BottomNavigation: MyBottomNavigation,
    Menu: menuTheme,
  },

  styles: {
    global: (props: any) => ({
      // Optionally set global CSS styles
      body: {
        color: colors.primaryFont,
        bg: colors.bg,
      },
    }),
  },
});
