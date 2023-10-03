import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "./colors";
const custom = defineStyle({
  color: colors.brand,
});
export const spinnerTheme = defineStyleConfig({
  variants: { custom },
});
