import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./lib/theme/customTheme";
import THE_GENIUS_PROGRAM_CONFIG from "./lib/content/theGeniusProgramConfig";
import { THE_GENIUS_PROGRAM_CONTENT } from "./lib/content/theGeniusProgramContent";
import ConfigContext from "./context/ConfigProvider";
import ContentContext from "./context/ContentProvider";

const App = () => {
  const content = THE_GENIUS_PROGRAM_CONTENT;
  const config = THE_GENIUS_PROGRAM_CONFIG;

  return (
    <ChakraProvider theme={customTheme}>
      <ConfigContext.Provider value={config}>
        <ContentContext.Provider value={content as any}>
          <RouterProvider router={router} />
        </ContentContext.Provider>
      </ConfigContext.Provider>
    </ChakraProvider>
  );
};

export default App;
