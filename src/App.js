import React, { useState, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "animate.css";

import UserProvider from "store/UserContext";
import Admin from "pages/Admin";
import Main from "pages/Main";
import RSVPTest from "pages/RSVP";
import Nav from "components/Nav";
import ScrollToTop from "components/containers/ScrollToTop";
import CountdownClock from "components/CountdownClock";

import "./App.css";

function App() {
  // will actually change section
  const [section, setSection] = useState("top");
  // uses 'inview' and updates so nav makes necessary visual changes
  const [sectionInView, setSectionInView] = useState("top");
  const [topInView, setTopInView] = useState(true);

  const handleChangeSection = (newSection) => {
    console.log("\n\nNEW SECTION:", newSection, "\n\n");
    setSection(newSection);
    setSectionInView(newSection);
  };

  const areaInView = useRef();
  const handleChangeSectionInView = (newSection) => {
    areaInView.current = newSection;
    setTimeout(() => {
      setSectionInView(areaInView.current);
    }, 500);

    if (newSection === "top") {
      setTopInView(true);
    }
  };

  const handleLeaveTopSection = () => {
    setTopInView(false);
  };

  const handleEnterTopSection = () => {
    setTopInView(true);
  };

  return (
    <Box position="relative" sx={{ overflow: "hidden" }}>
      <Nav
        topInView={topInView}
        handleChangeSection={handleChangeSection}
        sectionInView={sectionInView}
      />
      <Box display={{ base: "none", md: "block" }}>
        <CountdownClock />
      </Box>

      <UserProvider>
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  section={section}
                  handleChangeSectionInView={handleChangeSectionInView}
                  handleLeaveTopSection={handleLeaveTopSection}
                  handleEnterTopSection={handleEnterTopSection}
                />
              }
            />
            <Route path="/admin" element={<Admin />} />
            <Route path="/rsvp-test" element={<RSVPTest />} />
          </Routes>
        </ScrollToTop>
      </UserProvider>
    </Box>
  );
}

export default App;
