import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { MAX_WIDTHS } from "utils/constants";
import TravelInfo from "components/TravelInfo";
import Accommodations from "components/Accommodations";

const Travel = () => {
  return (
    <Flex justify="center">
      <Box maxW={MAX_WIDTHS()} w="100%">
        <TravelInfo />
        <Box mt="32px">
          <Accommodations />
        </Box>
      </Box>
    </Flex>
  );
};

export default Travel;
