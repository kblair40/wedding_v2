import React, { useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { MAX_WIDTHS } from "utils/constants";
import TravelInfo from "components/TravelInfo";
import Accommodations from "components/Accommodations";
import Map from "components/Map";

const Travel = ({ setInView }) => {
  const options = { threshold: 0.25 };
  const [travelRef, travelInView] = useInView(options);

  useEffect(() => {
    console.log("travelInView:", travelInView);
    if (travelInView) {
      setInView("travel");
    }
  }, [travelInView]);

  const headerStyles = {
    fontSize: "40px",
    fontWeight: "600",
    textAlign: "center",
  };

  const detailStyles = {
    fontSize: "24px",
    fontWeight: "500",
    textAlign: "center",
  };
  return (
    <Flex alignItems="center" direction="column" ref={travelRef}>
      <Flex
        bg="neutral.100"
        // border="1px solid #ccc"
        py="32px"
        direction={{ base: "column", sm: "row" }}
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text {...headerStyles}>WHEN</Text>
          <Box h="3px" w="60px" bg="neutral.800" mb="16px" />
          <Text {...detailStyles}>
            Saturday
            <br />
            January 21, 2023
          </Text>
        </Flex>
        <Flex
          mt={{ base: "24px", sm: 0 }}
          alignItems="center"
          flexDirection="column"
          ml={{ base: 0, sm: "48px" }}
          // border="1px solid #ccc"
        >
          <Text {...headerStyles}>WHERE</Text>
          <Box h="3px" w="60px" bg="neutral.800" mb="16px" />
          <Text {...detailStyles}>
            Casa Feliz
            <br />
            Winter Park, FL
          </Text>
        </Flex>
      </Flex>

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
