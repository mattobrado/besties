import { extendTheme } from "@chakra-ui/react";
import { spinnerTheme } from "./spinnerTheme";
import menuTheme from "./menuTheme";
import { colors } from "./colors";
import bottomNavigationTheme from "./bottomNavigationTheme";
import { buttonTheme } from "./buttonTheme";
import { skeletonTheme } from "./skeletonTheme";

export const customTheme = extendTheme({
  colors: colors,

  components: {
    Text: {
      baseStyle: (props: any) => ({
        color: colors.primaryFont,
      }),
      variants: {
        // used as <Text variant="secondary">
        secondary: (props: any) => ({
          color: colors.primaryFont,
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
    global: (props: any) => ({
      // Optionally set global CSS styles
      body: {
        color: colors.primaryFont,
        bg: colors.bg,
      },
    }),
  },
});