import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import firebaseApp from "api/firebaseConfig";
import Navbar from "components/Navbar";
import OurNames from "components/OurNames";
import Home from "pages/Home";
import ToDoToEat from "pages/ToDoToEat";
import RSVP from "pages/RSVP";
import Travel from "pages/Travel";
import WeddingPartyPage from "pages/WeddingPartyPage";
import Registry from "pages/Registry";

function App() {
  return (
    <Box>
      <OurNames />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thingstodo" element={<ToDoToEat />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/weddingparty" element={<WeddingPartyPage />} />
        <Route path="/registry" element={<Registry />} />
      </Routes>
    </Box>
  );
}

export default App;
