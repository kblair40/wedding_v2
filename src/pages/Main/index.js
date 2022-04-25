import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

import MainBackground from "components/MainBackground";
import Travel from "sections/Travel";
import Activities from "sections/Activities";
import Schedule from "sections/Schedule";
import WeddingParty from "sections/WeddingParty";
import Gallery from "sections/Gallery";

const Main = ({ section, handleChangeSectionInView }) => {
  // const [topRef, topInView] = useInView(options);
  // const [travelRef, travelInView] = useInView(options);
  // const [scheduleRef, scheduleInView] = useInView(options);
  // const [activitiesRef, activitiesInView] = useInView(options);
  // const [weddingPartyRef, weddingPartyInView] = useInView(options);
  // const [galleryRef, galleryInView] = useInView(options);

  const topRef = useRef();
  const travelRef = useRef();
  const scheduleRef = useRef();
  const activitiesRef = useRef();
  const weddingPartyRef = useRef();
  const galleryRef = useRef();

  const refSectionMap = {
    top: topRef,
    travel: travelRef,
    schedule: scheduleRef,
    activities: activitiesRef,
    weddingParty: weddingPartyRef,
    gallery: galleryRef,
  };

  useEffect(() => {
    const ref = refSectionMap[section];
    console.log("REF:", ref);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  return (
    <Box>
      <Box ref={topRef}>
        <MainBackground setInView={() => handleChangeSectionInView("top")} />
      </Box>

      <Box
        ref={travelRef}
        // pt="-24px"
        // bg="neutral.100"
      >
        <Travel setInView={() => handleChangeSectionInView("travel")} />
      </Box>

      {/* <Box ref={scheduleRef}>
        <Schedule setInView={() => handleChangeSectionInView("schedule")} />
      </Box> */}

      <Box ref={activitiesRef}>
        {/* <Schedule /> */}
        <Activities setInView={() => handleChangeSectionInView("activities")} />
      </Box>

      <Box ref={weddingPartyRef}>
        <WeddingParty
          setInView={() => handleChangeSectionInView("weddingParty")}
        />
      </Box>

      <Box ref={galleryRef}>
        <Gallery setInView={() => handleChangeSectionInView("gallery")} />
      </Box>
    </Box>
  );
};

export default Main;
