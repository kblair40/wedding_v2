import React from "react";
import { Center, Flex, Heading, Box, HStack } from "@chakra-ui/react";

// size === 'small' | 'large'
// const OurNames = ({ size = "small" }) => {
// const OurNames = ({ size = "large" }) => {
const OurNames = ({ size }) => {
  const isSmall = size === "small";
  const headingSize = isSmall ? "2xl" : "6xl";
  const subHeadingSize = isSmall ? "md" : "xl";

  return (
    <React.Fragment>
      <Center py={{ base: "none", md: "8px" }}>
        <Flex
          direction={isSmall ? "row" : "column"}
          justifyContent="center"
          alignItems="center"
        >
          <Heading letterSpacing="1.5px" fontSize={headingSize}>
            KEVIN
          </Heading>
          <Heading mx={isSmall ? "6px" : "0"} fontSize={subHeadingSize}>
            AND
          </Heading>
          <Heading letterSpacing="1.5px" fontSize={headingSize}>
            SHANNON
          </Heading>
        </Flex>
      </Center>

      {size === "large" && (
        <HStack justifyContent="center">
          <Box
            h="4px"
            bg="black"
            w={{ base: "350px", sm: "472px", md: "736px" }}
          />
        </HStack>
      )}
    </React.Fragment>
  );
};

export default OurNames;
