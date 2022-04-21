import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

const OurNames = () => {
  const headingStyles = {
    color: "#fff",
    fontSize: "6xl",
    fontWeight: "700",
  };
  return (
    <Flex
      // flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading {...headingStyles}>shannon</Heading>
      <Heading {...headingStyles} mx="16px">
        &
      </Heading>
      <Heading {...headingStyles}>kevin</Heading>
    </Flex>
  );
};

export default OurNames;
