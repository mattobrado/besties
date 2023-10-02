import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import { withDefaultStyles } from "chakra-ui-bottom-navigation";

const bottomNavigationOverrides = {
  parts: ["container", "item", "label", "icon"],
  baseStyle: {
    container: {
      position: "fixed",
      display: "flex",
      justifyContent: "space-between",
      px: 4,
      py: 2,
    },
    item: {
      flex: 1,
      mx: 4,
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
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
