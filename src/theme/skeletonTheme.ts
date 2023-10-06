import { defineStyle, defineStyleConfig, cssVar } from "@chakra-ui/react";
import { colors } from "./colors";

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const brand = defineStyle({
  [$startColor.variable]: colors.bg, //changing startColor to pink.100
  [$endColor.variable]: colors.bg, // changing endColor to pink.400
});
export const skeletonTheme = defineStyleConfig({
  variants: { brand },
});
