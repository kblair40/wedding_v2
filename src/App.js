import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import firebaseApp from "api/firebaseConfig";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import ThingsToDo from "pages/ThingsToDo";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thingstodo" element={<ThingsToDo />} />
      </Routes>
    </Box>
  );
}

export default App;
