import React from "react";
import { Box, Flex, Text, Heading, Divider } from "@chakra-ui/react";

// let textColor = "#e6d9b2";

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
      mx="auto"
      p="8px"
      w="min-content"
      flexDirection="column"
      alignItems="center"
      display={{ base: "none", md: "flex" }}
      borderRadius="2px"
      bg="stone"
    >
      <Flex alignItems="center" justifyContent="center" w="100%">
        <Text {...initialStyles}>S</Text>
        <Box h="2px" bg="#fff" w="140px" mx="8px" />
        <Text {...initialStyles}>K</Text>
      </Flex>

      <Flex alignItems="center" justifyContent="center">
        <Heading
          {...headingStyles}
          // outlineColor="#000"
          // outlineOffset="2px"
          // outline="2px solid #000"
          // text
        >
          shannon
        </Heading>
        <Heading {...headingStyles} mx="16px">
          &
        </Heading>
        <Heading {...headingStyles}>kevin</Heading>
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt="0px">
        <Text color="#fff" letterSpacing="2.5px" fontSize="lg">
          JANUARY 21, 2023
        </Text>
        <Text ml="1rem" color="#fff" letterSpacing="2.5px" fontSize="lg">
          WINTER PARK, FL
        </Text>
      </Flex>
    </Flex>
  );
};

export default OurNames;
