import { extendTheme } from "@chakra-ui/react";
import { spinnerTheme } from "./spinnerTheme";
import menuTheme from "./menuTheme";
import { COLORS } from "./colors";
import bottomNavigationTheme from "./bottomNavigationTheme";
import { buttonTheme } from "./buttonTheme";
import { skeletonTheme } from "./skeletonTheme";

export const customTheme = extendTheme({
  colors: COLORS,

  components: {
    Text: {
      baseStyle: () => ({
        color: COLORS.PRIMARY_FONT,
      }),
      variants: {
        secondary: () => ({
          color: COLORS.PRIMARY_FONT,
        }),
      },
    },
    BottomNavigation: bottomNavigationTheme,
    Button: buttonTheme,
    Menu: menuTheme,
    Spinner: spinnerTheme,
    Skeleton: skeletonTheme,
  },

  styles: {
    global: () => ({
      // Optionally set global CSS styles
      body: {
        color: COLORS.PRIMARY_FONT,
        bg: COLORS.BACKGROUND,
      },
    }),
  },
});
