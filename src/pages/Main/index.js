import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import MainBackground from "components/MainBackground";
import Travel from "sections/Travel";
import Activities from "sections/Activities";
import Schedule from "sections/Schedule";
import WeddingParty from "sections/WeddingParty";
import Gallery from "sections/Gallery";
import WhenAndWhere from "sections/WhenAndWhere";

const Main = ({ section }) => {
  const options = { threshold: 0 };

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

  // useEffect(() => {
  //   if (weddingPartyRef.current) {
  //     console.log("valid");
  //     weddingPartyRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [weddingPartyRef.current]);

  return (
    <Box>
      <Box ref={topRef}>
        <MainBackground />
      </Box>

      <Box ref={travelRef}>
        <WhenAndWhere />

        <Travel />
      </Box>

      <Box ref={scheduleRef}>
        <Schedule />
      </Box>

      <Box ref={activitiesRef}>
        <Activities />
      </Box>

      <Box ref={weddingPartyRef}>
        <WeddingParty />
      </Box>

      <Box ref={galleryRef}>
        <Gallery />
      </Box>
    </Box>
  );
};

export default Main;
