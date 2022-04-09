import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { MAX_WIDTHS } from "utils/constants";
import TravelInfo from "components/TravelInfo";
import Accommodations from "components/Accommodations";
import Map from "components/Map";

const Travel = () => {
  return (
    <Flex justify="center">
      <Box
        // maxW={{}}
        // border="1px solid black"
        maxW={MAX_WIDTHS()}
        w="100%"
        pb="32px"
      >
        <TravelInfo />
        <Box mt="32px">
          <Accommodations />
        </Box>
        <Box mt="32px">
          <Map />
        </Box>
      </Box>
    </Flex>
  );
};

export default Travel;
