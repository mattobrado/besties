import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { menuAnatomy } from "@chakra-ui/anatomy";
import { colors } from "./colors";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const menuStyle = definePartsStyle({
  // define the part you're going to style
  list: {
    // this will style the MenuList component
    py: "3",
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
    my: "3",
    borderWidth: "2px",
    borderColor: colors.brand,
  },
  button: { transition: "all 0.2s" },
});
const menuTheme = defineMultiStyleConfig({ baseStyle: menuStyle });

export default menuTheme;
