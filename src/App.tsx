import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import { withDefaultStyles } from "chakra-ui-bottom-navigation";

const bottomNavigationOverrides = {
  // ... component's override
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
