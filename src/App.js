import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import firebaseApp from "api/firebaseConfig";
import Home from "pages/Home";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
