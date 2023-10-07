import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { COLORS } from "./colors";
const custom = defineStyle({
  color: COLORS.BRAND,
});
export const spinnerTheme = defineStyleConfig({
  variants: { custom },
});
