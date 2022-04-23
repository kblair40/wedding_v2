import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "animate.css";

import UserProvider from "store/UserContext";
import Admin from "pages/Admin";
import Main from "pages/Main";
import Nav from "components/Nav";
import ScrollToTop from "components/containers/ScrollToTop";

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
            <Route path="/" element={<Main />} />
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="/rsvp" element={<RSVP />} /> */}
          </Routes>
        </ScrollToTop>
      </UserProvider>
    </Box>
  );
}

export default App;
