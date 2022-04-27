import React, { useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { MAX_WIDTHS } from "utils/constants";
import TravelInfo from "components/TravelInfo";
import Accommodations from "components/Accommodations";
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
    <Flex
      alignItems="center"
      direction="column"
      // border="2px solid #000"
      w="100%"
      bg="white"
      pt="32px"
    >
      <Flex direction="column" alignItems="center">
        <Text
          fontSize={{ base: "3xl", sm: "48px" }}
          textAlign="center"
          fontWeight="500"
          w="100%"
          // mt="24px"
          letterSpacing="2px"
        >
          GETTING THERE
        </Text>
        <Box h="3px" w="60px" bg="neutral.800" />

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
    </Flex>
  );
};

export default GettingThere;