import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./theme/customTheme";
import { BACKGROUNDS } from "./theme/colors";
import { useState } from "react";
import BackgroundContext from "./BackGroundContext";
import { UserType } from "./lib/types";
import getBackgroundForUser from "./utils/getBackgroundForUser";

const App = () => {
  const [background, setBackground] = useState(BACKGROUNDS.default);

  const setBackgroundForUser = ({ user }: { user?: UserType }) => {
    setBackground(getBackgroundForUser({ user }));
  };

  return (
    <ChakraProvider theme={customTheme}>
      <Box
        minHeight="100vh"
        style={{
          background: background,
        }}
      >
        <BackgroundContext.Provider value={setBackgroundForUser}>
          <RouterProvider router={router} />
        </BackgroundContext.Provider>
      </Box>
    </ChakraProvider>
  );
};

export default App;
