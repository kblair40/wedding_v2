import React from "react";
import { Box, Flex, Text, Heading, useBreakpointValue } from "@chakra-ui/react";

const OurNames = () => {
  const headingStyles = {
    color: "#fff",
    fontSize: useBreakpointValue({ base: "48px", sm: "74px" }),
    fontWeight: "700",
  };

  const initialStyles = {
    color: "#fff",
    fontSize: "xl",
    fontWeight: "400",
    letterSpacing: "2px",
  };

  return (
    <Flex
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
        <Text
          color="#fff"
          letterSpacing="2.5px"
          fontWeight={{ base: "500", md: "400" }}
          fontSize={{ base: "md", sm: "lg" }}
        >
          JANUARY 21, 2023
        </Text>
        <Text
          ml={{ md: "1rem" }}
          color="#fff"
          letterSpacing="2.5px"
          fontWeight={{ base: "500", md: "400" }}
          fontSize={{ base: "md", sm: "lg" }}
        >
          WINTER PARK, FL
        </Text>
      </Flex>
    </Flex>
  );
};

export default OurNames;
