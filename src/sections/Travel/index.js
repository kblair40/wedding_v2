import React, { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

// import { MAX_WIDTHS } from "utils/constants";
// import TravelInfo from "components/TravelInfo";
// import Accommodations from "components/Accommodations";
// import Map from "components/Map";
import WhenAndWhere from "sections/WhenAndWhere";
import GettingThere from "sections/Travel/GettingThere";

const Travel = ({ setInView }) => {
  // const options = { threshold: 0.25 };
  const options = { threshold: 0.01 };
  const [travelRef, travelInView] = useInView(options);

  useEffect(() => {
    console.log("travelInView:", travelInView);
    if (travelInView) {
      setInView("travel");
    }
  }, [travelInView]);

  return (
    <Flex
      alignItems="center"
      direction="column"
      w="100%"
      // pt="24px"
      bg="neutral.100"
    >
      <WhenAndWhere />
      <Box ref={travelRef} />
      <GettingThere />
    </Flex>
  );
};

export default Travel;
