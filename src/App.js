import React, { useState } from "react";
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
  const [section, setSection] = useState("top");

  const handleChangeSection = (newSection) => {
    setSection(newSection);
  };

  return (
    <Box position="relative" sx={{ overflow: "hidden !important" }}>
      <Nav handleChangeSection={handleChangeSection} />
      <CountdownClock />
      <UserProvider>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Main section={section} />} />
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="/rsvp" element={<RSVP />} /> */}
          </Routes>
        </ScrollToTop>
      </UserProvider>
    </Box>
  );
}

export default App;
