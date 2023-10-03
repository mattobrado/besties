import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./lib/theme";
import { customTheme } from "./lib/customTheme";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
