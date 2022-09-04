import React, { useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import loadable from "@loadable/component";

import { MAX_WIDTHS } from "utils/constants";
import TravelInfo from "components/TravelInfo";
import Accommodations from "components/Accommodations";
import SectionLabel from "components/SectionLabel";
// import Map from "components/Map";
const Map = loadable(() => import("components/Map"));

const Travel = ({ setInView }) => {
  const options = { threshold: 0.01 };
  const [inViewRef, inView] = useInView(options);

  useEffect(() => {
    if (inView) {
      setInView("travel");
    }
  }, [inView]);

  return (
    <Flex alignItems="center" direction="column" w="100%" bg="neutral.100">
      <Box bg="#fff" w="100%">
        <Flex direction="column" alignItems="center">
          <SectionLabel label="getting there" />

          <Box maxW={MAX_WIDTHS()} mt="36px" w="100%" pb="16px">
            <TravelInfo />

            <Box mt="36px" ref={inViewRef}>
              <Accommodations />
            </Box>

            <Box
              mt="20px"
              px="16px"
              // border="1px solid green"
            >
              <Map />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Travel;
