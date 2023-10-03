import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "./colors";

const custom = defineStyle({
  bg: colors.brand,
});

const customGhost = defineStyle({
  color: colors.brand,
});
export const buttonTheme = defineStyleConfig({
  variants: { custom, customGhost },
});
