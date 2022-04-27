import React, { useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { MAX_WIDTHS } from "utils/constants";
import TravelInfo from "components/TravelInfo";
import Accommodations from "components/Accommodations";
import SectionLabel from "components/SectionLabel";
import Map from "components/Map";

const GettingThere = ({ setInView }) => {
  const options = { threshold: 0.01 };
  const [inViewRef, inView] = useInView(options);

  useEffect(() => {
    console.log("travelInView:", inView);
    if (inView) {
      setInView("travel");
    }
  }, [inView]);
  return (
    <Box bg="#fff" w="100%">
      <Flex direction="column" alignItems="center">
        <SectionLabel label="getting there" />

        <Box maxW={MAX_WIDTHS()} mt="36px" w="100%" pb="16px">
          <TravelInfo />

          <Box mt="36px" ref={inViewRef}>
            <Accommodations />
          </Box>

          <Box mt="20px" px="16px">
            <Map />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default GettingThere;
