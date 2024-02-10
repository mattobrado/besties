import { defineStyle, defineStyleConfig, cssVar } from "@chakra-ui/react";

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const custom = defineStyle({
  [$startColor.variable]: "transparent", //changing startColor to pink.100
  [$endColor.variable]: "transparent", // changing endColor to pink.400
});
export const skeletonTheme = defineStyleConfig({
  variants: { custom },
});
