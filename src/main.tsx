import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ColorModeScript, theme } from "@chakra-ui/react";
import App from "src/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>
);
