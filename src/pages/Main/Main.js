import React, { useEffect, useRef, useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

import MainBackground from "components/MainBackground";
import Travel from "sections/Travel";
import Activities from "sections/Activities";
// import RSVP from "sections/RSVP";
import TempRSVPSection from "sections/RSVP/TempRSVPSection";
import WeddingParty from "sections/WeddingParty";
import Gallery from "sections/Gallery";
import WhenAndWhere from "sections/WhenAndWhere";
import Registry from "sections/Registry";

const Main = ({
  section,
  handleChangeSectionInView,
  handleLeaveTopSection,
  handleEnterTopSection,
  handleMainBgImageLoaded,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const topRef = useRef();
  const travelRef = useRef();
  const scheduleRef = useRef();
  const activitiesRef = useRef();
  const weddingPartyRef = useRef();
  const galleryRef = useRef();
  const rsvpRef = useRef();
  const registryRef = useRef();

  const refMap = {
    top: topRef,
    rsvp: rsvpRef,
    travel: travelRef,
    schedule: scheduleRef,
    activities: activitiesRef,
    weddingParty: weddingPartyRef,
    gallery: galleryRef,
    registry: registryRef,
  };

  useEffect(() => {
    const ref = refMap[section];

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  const handleImageLoaded = () => {
    handleMainBgImageLoaded();
    setImgLoaded(true);
  };

  const boxStyle = {
    pb: "24px",
    scrollMarginTop: useBreakpointValue({ base: 0, md: "32px" }),
  };

  return (
    <Box>
      <Box ref={topRef}>
        <MainBackground
          setInView={() => handleChangeSectionInView("top")}
          handleLeaveTopSection={handleLeaveTopSection}
          handleEnterTopSection={handleEnterTopSection}
          onMainBgImageLoaded={handleImageLoaded}
        />
      </Box>

      {imgLoaded && (
        <React.Fragment>
          <WhenAndWhere />

          <Box {...boxStyle} ref={rsvpRef}>
            <TempRSVPSection
              setInView={() => handleChangeSectionInView("rsvp")}
            />
          </Box>
        </React.Fragment>
      )}

      <Box {...boxStyle} ref={travelRef}>
        <Travel setInView={() => handleChangeSectionInView("travel")} />
      </Box>

      {imgLoaded && (
        <React.Fragment>
          <Box {...boxStyle} ref={activitiesRef}>
            <Activities
              setInView={() => handleChangeSectionInView("activities")}
            />
          </Box>

          <Box {...boxStyle} ref={registryRef}>
            <Registry setInView={() => handleChangeSectionInView("registry")} />
          </Box>

          <Box {...boxStyle} ref={weddingPartyRef}>
            <WeddingParty
              setInView={() => handleChangeSectionInView("weddingParty")}
            />
          </Box>

          <Box {...boxStyle} ref={galleryRef}>
            <Gallery setInView={() => handleChangeSectionInView("gallery")} />
          </Box>
        </React.Fragment>
      )}

      {/* OLD VERSION */}
      {/* {imgLoaded && (
        <React.Fragment>
          <WhenAndWhere />

          <Box {...boxStyle} ref={rsvpRef}>
            <TempRSVPSection
              setInView={() => handleChangeSectionInView("rsvp")}
            />
          </Box>

          <Box {...boxStyle} ref={travelRef}>
            <Travel setInView={() => handleChangeSectionInView("travel")} />
          </Box>

          <Box {...boxStyle} ref={activitiesRef}>
            <Activities
              setInView={() => handleChangeSectionInView("activities")}
            />
          </Box>

          <Box {...boxStyle} ref={registryRef}>
            <Registry setInView={() => handleChangeSectionInView("registry")} />
          </Box>

          <Box {...boxStyle} ref={weddingPartyRef}>
            <WeddingParty
              setInView={() => handleChangeSectionInView("weddingParty")}
            />
          </Box>

          <Box {...boxStyle} ref={galleryRef}>
            <Gallery setInView={() => handleChangeSectionInView("gallery")} />
          </Box>
        </React.Fragment>
      )} */}
    </Box>
  );
};

export default Main;
