import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "animate.css";
// import "focus-visible/dist/focus-visible";

import UserProvider from "store/UserContext";
import Home from "pages/Home";
import ToDoToEat from "pages/ToDoToEat";
import Admin from "pages/Admin";
import Travel from "pages/Travel";
import WeddingPartyPage from "pages/WeddingPartyPage";
import Registry from "pages/Registry";
import RSVP from "pages/RSVP";
import Nav from "components/Nav";
import ScrollToTop from "components/containers/ScrollToTop";
import Gallery from "pages/Gallery";

import CountdownClock from "components/CountdownClock";

import "./App.css";

function App() {
  return (
    <Box position="relative" sx={{ overflow: "hidden !important" }}>
      <Nav />
      <CountdownClock />
      <UserProvider>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thingstodo" element={<ToDoToEat />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/weddingparty" element={<WeddingPartyPage />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </ScrollToTop>
      </UserProvider>
    </Box>
  );
}

export default App;
