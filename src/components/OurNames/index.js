import React from "react";
import { Box, Flex, Text, Heading, Divider } from "@chakra-ui/react";

const OurNames = () => {
  const headingStyles = {
    color: "#fff",
    // fontSize: "6xl",
    fontSize: "70px",
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
      flexDirection="column"
      alignItems="center"
      display={{ base: "none", md: "flex" }}
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

      <Flex alignItems="center" justifyContent="center" mt="0px">
        <Text color="white" letterSpacing="2.5px" fontSize="lg">
          JANUARY 21, 2023
        </Text>
        <Text ml="1rem" color="white" letterSpacing="2.5px" fontSize="lg">
          WINTER PARK, FL
        </Text>
      </Flex>
    </Flex>
  );
};

export default OurNames;
