import { defineStyle, defineStyleConfig, cssVar } from "@chakra-ui/react";
import { COLORS } from "./colors";

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const brand = defineStyle({
  [$startColor.variable]: COLORS.BACKGROUND, //changing startColor to pink.100
  [$endColor.variable]: COLORS.BACKGROUND, // changing endColor to pink.400
});
export const skeletonTheme = defineStyleConfig({
  variants: { brand },
});
