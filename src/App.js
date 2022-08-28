import React, { useState, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "animate.css";

import Admin from "pages/Admin";
import Main from "pages/Main";
import RSVPTest from "pages/RSVP";
import Nav from "components/Nav";
import ScrollToTop from "components/containers/ScrollToTop";
import CountdownClock from "components/CountdownClock";

function App() {
  // will actually change section
  const [section, setSection] = useState("top");
  // uses 'inview' and updates so nav makes necessary visual changes
  const [sectionInView, setSectionInView] = useState("top");
  const [topInView, setTopInView] = useState(true);
  const [mainImgLoaded, setMainImgLoaded] = useState(false);

  const handleChangeSection = (newSection) => {
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

  const handleMainBgImageLoaded = () => {
    console.log("loaded");
    setMainImgLoaded(true);
  };

  return (
    <Box position="relative" sx={{ overflow: "hidden" }}>
      <Nav
        topInView={topInView}
        handleChangeSection={handleChangeSection}
        sectionInView={sectionInView}
        mainImgLoaded={mainImgLoaded}
      />
      <Box display={{ base: "none", md: "block" }}>
        <CountdownClock />
      </Box>

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
                handleMainBgImageLoaded={handleMainBgImageLoaded}
              />
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/rsvp-test" element={<RSVPTest />} />
        </Routes>
      </ScrollToTop>
    </Box>
  );
}

export default App;
