import React, { useEffect } from "react";
import { Box, Flex, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import { gsap } from "gsap";

const OurNames = () => {
  const headingStyles = {
    color: "#fff",
    fontSize: useBreakpointValue({ base: "48px", sm: "68px", md: "80px" }),
    fontWeight: "700",
  };

  const initialStyles = {
    color: "#fff",
    fontSize: "xlt",
    fontWeight: "400",
    letterSpacing: "2px",
  };

  const dateLocStyles = {
    fontSize: useBreakpointValue({ base: "mdt", sm: "lgt", md: "xlt" }),
    fontWeight: useBreakpointValue({ base: "500", sm: "400" }),
    color: "#fff",
    letterSpacing: "2px",
  };

  useEffect(() => {
    gsap.to(".names-container", { duration: 0.5, delay: 1, opacity: 1 });
  }, []);

  return (
    <Flex
      className="names-container"
      opacity={0}
      mx="auto"
      p="8px"
      w="min-content"
      flexDirection="column"
      alignItems="center"
      borderRadius="2px"
    >
      <Flex alignItems="center" justifyContent="center" w="100%">
        <Text {...initialStyles}>S</Text>
        <Box h="2px" bg="#fff" w="140px" mx="8px" />
        <Text {...initialStyles}>K</Text>
      </Flex>

      <Flex alignItems="center" justifyContent="center">
        <Heading {...headingStyles}>shannon</Heading>
        <Heading {...headingStyles} mx="16px">
          &
        </Heading>
        <Heading {...headingStyles}>kevin</Heading>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        mt="0px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Text {...dateLocStyles}>JANUARY 21, 2023</Text>
        <Text ml={{ md: "1rem" }} {...dateLocStyles}>
          WINTER PARK, FL
        </Text>
      </Flex>
    </Flex>
  );
};

export default OurNames;
