import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import App from "src/App";
import { customTheme } from "src/lib";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />{" "}
    <App />
  </React.StrictMode>
);
