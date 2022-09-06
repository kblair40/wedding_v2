import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import loadable from "@loadable/component";

// import Fonts from "fonts";

// fonts
// import "@fontsource/cabin/400.css"; // need on initial load
// import "@fontsource/cabin/400-italic.css";
// import "@fontsource/cabin/500.css"; // need on initial load
// import "@fontsource/cabin/500-italic.css";
// import "@fontsource/cabin/600.css";
// import "@fontsource/cabin/700.css";

// import "@fontsource/cormorant-garamond/400.css";
// import "@fontsource/cormorant-garamond/500.css";
// import "@fontsource/cormorant-garamond/600.css";
// import "@fontsource/cormorant-garamond/700.css"; // need on initial load

import "./index.css";
// import theme from "utils/theme";

// React.lazy(() => import("@fontsource/cabin/400-italic.css"));
// React.lazy(() => import("@fontsource/cabin/500-italic.css"));
// React.lazy(() => import("@fontsource/cabin/600.css"));
// React.lazy(() => import("@fontsource/cabin/700.css"));
// React.lazy(() => import("@fontsource/cormorant-garamond/400.css"));
// React.lazy(() => import("@fontsource/cormorant-garamond/500.css"));
// React.lazy(() => import("@fontsource/cormorant-garamond/600.css"));

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
