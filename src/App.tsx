import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import { withDefaultStyles } from "chakra-ui-bottom-navigation";
import COLORS from "./lib/colors";

const bottomNavigationOverrides = {
  parts: ["Box", "container", "item", "label", "icon"],
  baseStyle: {
    container: {
      position: "fixed",
      display: "flex",
      justifyContent: "space-between",
    },
    item: {
      flex: 1,
      opacity: 1,
      _selected: {
        opacity: 1,
      },
    },
  },
};

const MyBottomNavigation = withDefaultStyles(bottomNavigationOverrides);

const theme = extendTheme({
  components: {
    BottomNavigation: MyBottomNavigation,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: COLORS.bg,
      },
    }),
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
