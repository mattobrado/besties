import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
  // let's also provide dark mode alternatives
  _dark: {
    background: "pink.500",
    color: "black",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary },
});
