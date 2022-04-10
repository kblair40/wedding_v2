import React from "react";
import {
  Center,
  Flex,
  Heading,
  Box,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const OurNames = () => {
  const headingSize = useBreakpointValue({ base: "lg", sm: "2xl", md: "6xl" });
  const subHeadingSize = useBreakpointValue({
    base: "sm",
    sm: "lg",
    md: "3xl",
  });

  return (
    <Box w="100%" display={{ base: "none", md: "block" }}>
      <Center py={{ base: "none", md: "8px" }}>
        <Flex
          direction={{ base: "row", md: "column" }}
          justifyContent="center"
          alignItems="center"
          // border="1px solid red"
          w="100%"
          maxW="600px"
          mt="8px"
        >
          <Heading
            // letterSpacing="1.5px"
            lineHeight="40px"
            letterSpacing="3px"
            fontSize={headingSize}
          >
            KEVIN
          </Heading>
          <Heading
            mx="6px"
            // fontSize={subHeadingSize}
            fontSize="4xl"
            letterSpacing="3px"
            fontFamily="Great Vibes"
          >
            and
          </Heading>
          <Heading
            // letterSpacing="1.5px"
            lineHeight="40px"
            letterSpacing="3px"
            fontSize={headingSize}
          >
            SHANNON
          </Heading>
        </Flex>
      </Center>

      <HStack justifyContent="center" display={{ base: "none", md: "flex" }}>
        <Box h="4px" bg="black" w="100%" maxW="736px" />
      </HStack>
    </Box>
  );
};

export default OurNames;
