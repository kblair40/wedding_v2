import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { MAX_WIDTHS } from "utils/constants";
import TravelInfo from "components/TravelInfo";
import Accommodations from "components/Accommodations";
import Map from "components/Map";

const Travel = () => {
  return (
    <Flex alignItems="center" className="fade-in-immediate" direction="column">
      <Text
        fontSize={{ base: "3xl", sm: "48px" }}
        textAlign="center"
        fontWeight="500"
        // border="1px solid green"
        w="100%"
        mt="32px"
        letterSpacing="2px"
      >
        GETTING THERE
      </Text>
      <Box h="3px" w="60px" bg="neutral.800" />

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
