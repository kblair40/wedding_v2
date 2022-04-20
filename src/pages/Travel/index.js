import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { MAX_WIDTHS } from "utils/constants";
import TravelInfo from "components/TravelInfo";
import Accommodations from "components/Accommodations";
import Map from "components/Map";

const Travel = () => {
  return (
    <Flex justify="center" className="fade-in-immediate">
      <Box maxW={MAX_WIDTHS()} mt="36px" w="100%" pb="16px">
        <TravelInfo />
        <Box mt="36px">
          <Accommodations />
        </Box>
        <Box mt="20px" px="16px">
          <Map />
        </Box>
      </Box>
    </Flex>
  );
};

export default Travel;
