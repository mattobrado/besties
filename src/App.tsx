import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./lib/theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
