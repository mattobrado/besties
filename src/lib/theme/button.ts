import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
  // let's also provide dark mode alternatives
  _dark: {
    background: "brand.500",
    color: "black",
  },
});

const brandSecondary = defineStyle({
  // let's also provide dark mode alternatives
  _dark: {
    background: "brand.500",
    color: "white",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary, brandSecondary },
});
