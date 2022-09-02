import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// fonts
import "@fontsource/cabin/400.css";
import "@fontsource/cabin/400-italic.css";
import "@fontsource/cabin/500.css";
import "@fontsource/cabin/500-italic.css";
import "@fontsource/cabin/600.css";
import "@fontsource/cabin/700.css";

import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";

import "./index.css";
import theme from "utils/theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
