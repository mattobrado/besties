import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./theme/customTheme";
import { BACKGROUNDS } from "./theme/colors";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Box
        minHeight="100vh"
        style={{
          background: BACKGROUNDS.RAINBOW_MESH,
        }}
      >
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
