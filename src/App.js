import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import "focus-visible/dist/focus-visible";

import UserProvider from "store/UserContext";
import Home from "pages/Home";
import ToDoToEat from "pages/ToDoToEat";
import Admin from "pages/Admin";
import Travel from "pages/Travel";
import WeddingPartyPage from "pages/WeddingPartyPage";
import Registry from "pages/Registry";
import RSVP from "pages/RSVP";
import Nav from "components/Nav";

function App() {
  return (
    <Box>
      <Nav />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thingstodo" element={<ToDoToEat />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/weddingparty" element={<WeddingPartyPage />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
      </UserProvider>
    </Box>
  );
}

export default App;
