import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./theme/customTheme";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
