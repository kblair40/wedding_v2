import React from "react";
import {
  Center,
  Flex,
  Heading,
  Box,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
// import { useInView } from "react-intersection-observer";

const OurNames = () => {
  const headingSize = useBreakpointValue({ base: "lg", sm: "3xl", md: "6xl" });
  const subHeadingSize = useBreakpointValue({
    base: "sm",
    sm: "lg",
    md: "3xl",
  });

  return (
    <Box display={{ base: "none", md: "block" }}>
      <Center py={{ base: "none", md: "8px" }}>
        <Flex
          direction={{ base: "row", md: "column" }}
          justifyContent="center"
          alignItems="center"
        >
          <Heading letterSpacing="1.5px" fontSize={headingSize}>
            KEVIN
          </Heading>
          <Heading mx="6px" fontSize={subHeadingSize}>
            AND
          </Heading>
          <Heading letterSpacing="1.5px" fontSize={headingSize}>
            SHANNON
          </Heading>
        </Flex>
      </Center>

      <HStack
        bgColor="transparent"
        justifyContent="center"
        display={{ base: "none", md: "flex" }}
      >
        <Box h="4px" bg="black" w="736px" />
      </HStack>
    </Box>
  );
};

export default OurNames;
