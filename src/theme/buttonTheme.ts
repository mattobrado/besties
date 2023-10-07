import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { COLORS } from "./colors";

const custom = defineStyle({
  bg: COLORS.BRAND,
});

const customGhost = defineStyle({
  color: COLORS.BRAND,
});
export const buttonTheme = defineStyleConfig({
  variants: { custom, customGhost },
});
