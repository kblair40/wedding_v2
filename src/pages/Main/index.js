import React, { useEffect, useRef } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

import MainBackground from "components/MainBackground";
import Travel from "sections/Travel";
import Activities from "sections/Activities";
import RSVP from "sections/RSVP";
import WeddingParty from "sections/WeddingParty";
import Gallery from "sections/Gallery";
import WhenAndWhere from "sections/WhenAndWhere";

const Main = ({
  section,
  handleChangeSectionInView,
  handleLeaveTopSection,
  handleEnterTopSection,
}) => {
  const topRef = useRef();
  const travelRef = useRef();
  const scheduleRef = useRef();
  const activitiesRef = useRef();
  const weddingPartyRef = useRef();
  const galleryRef = useRef();
  const rsvpRef = useRef();

  const refMap = {
    top: topRef,
    rsvp: rsvpRef,
    travel: travelRef,
    schedule: scheduleRef,
    activities: activitiesRef,
    weddingParty: weddingPartyRef,
    gallery: galleryRef,
  };

  useEffect(() => {
    const ref = refMap[section];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

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
        />
      </Box>

      <WhenAndWhere />

      <Box ref={rsvpRef} {...boxStyle}>
        <RSVP setInView={() => handleChangeSectionInView("rsvp")} />
      </Box>

      <Box {...boxStyle} ref={travelRef}>
        <Travel setInView={() => handleChangeSectionInView("travel")} />
      </Box>

      <Box ref={activitiesRef} {...boxStyle}>
        <Activities setInView={() => handleChangeSectionInView("activities")} />
      </Box>

      <Box {...boxStyle} ref={weddingPartyRef}>
        <WeddingParty
          setInView={() => handleChangeSectionInView("weddingParty")}
        />
      </Box>

      <Box ref={galleryRef} {...boxStyle}>
        <Gallery setInView={() => handleChangeSectionInView("gallery")} />
      </Box>
    </Box>
  );
};

export default Main;
