import { RouterProvider } from "react-router-dom";
import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import {
  THE_GENIUS_PROGRAM_CONFIG,
  THE_GENIUS_PROGRAM_CONTENT,
  customTheme,
} from "src/lib";
import { ConfigContext, ContentContext } from "src/context";
import { router } from "src/router";

const App = () => {
  const content = THE_GENIUS_PROGRAM_CONTENT;
  const config = THE_GENIUS_PROGRAM_CONFIG;

  return (
    <DarkMode>
      <ChakraProvider theme={customTheme}>
        <ConfigContext.Provider value={config}>
          <ContentContext.Provider value={content as any}>
            <RouterProvider router={router} />
          </ContentContext.Provider>
        </ConfigContext.Provider>
      </ChakraProvider>
    </DarkMode>
  );
};

export default App;
