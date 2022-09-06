import React, { useEffect, useRef, useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import loadable from "@loadable/component";

import MainBackground from "components/MainBackground";
import "./Main.css";

const Travel = loadable(() => import("sections/Travel"));
const Activities = loadable(() => import("sections/Activities"));
const TempRSVPSection = loadable(() => import("sections/RSVP/TempRSVPSection"));
const WeddingParty = loadable(() => import("sections/WeddingParty"));
const Gallery = loadable(() => import("sections/Gallery"));
const WhenAndWhere = loadable(() => import("sections/WhenAndWhere"));
const Registry = loadable(() => import("sections/Registry"));

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

  const loadingrRef = useRef();

  useEffect(() => {
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

        {!imgLoaded && (
          <Box
            ref={loadingrRef}
            h="100vh"
            w="100vw"
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            zIndex={11}
            bg="white"
          />
        )}
      </Box>

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
    </Box>
  );
};

export default Main;
