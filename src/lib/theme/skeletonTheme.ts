import { defineStyle, defineStyleConfig, cssVar } from "@chakra-ui/react";

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const custom = defineStyle({
  [$startColor.variable]: "transparent", //changing startColor to brand.100
  [$endColor.variable]: "transparent", // changing endColor to brand.400
});
export const skeletonTheme = defineStyleConfig({
  variants: { custom },
});
