import React, { useState, useRef, useEffect } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

// fonts needed on initial load - the rest are imported in loadFonts called by 'onmount' useEffect
import "@fontsource/cabin/400.css";
import "@fontsource/cabin/500.css";
import "@fontsource/cabin/700.css";
import "@fontsource/cormorant-garamond/700.css";

import Main from "pages/Main";
// import RSVPTest from "pages/RSVPTest";
// import Admin from "pages/Admin";
import Nav from "components/Nav";
import ScrollToTop from "components/containers/ScrollToTop";
import theme from "utils/theme";

const Admin = React.lazy(() => import("pages/Admin"));
const RSVPTest = React.lazy(() => import("pages/RSVPTest"));

const CountdownClock = loadable(() => import("components/CountdownClock"));

function App() {
  // will actually change section
  const [section, setSection] = useState("top");
  // uses 'inview' and updates so nav makes necessary visual changes
  const [sectionInView, setSectionInView] = useState("top");
  const [topInView, setTopInView] = useState(true);
  const [mainImgLoaded, setMainImgLoaded] = useState(false);

  const loadFonts = async () => {
    try {
      console.log("LOADING FONTS");
      // These fonts are needed further down the site's main page.  No need to load immediately.
      await Promise.all([
        import("@fontsource/cabin/400-italic.css"),
        import("@fontsource/cabin/500-italic.css"),
        import("@fontsource/cabin/600.css"),
        import("@fontsource/cormorant-garamond/400.css"),
        import("@fontsource/cormorant-garamond/500.css"),
        import("@fontsource/cormorant-garamond/600.css"),
      ]);
    } catch (err) {
      console.error("\nERROR LOADING FONTS:\n", err);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

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
    <ChakraProvider theme={theme}>
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
          <React.Suspense fallback={<div>Loading...</div>}>
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

              <Route path="/rsvp-test" element={<RSVPTest />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </React.Suspense>
        </ScrollToTop>
      </Box>
    </ChakraProvider>
  );
}

export default App;
