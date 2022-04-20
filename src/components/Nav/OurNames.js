import React from "react";
import {
  Center,
  Flex,
  Heading,
  Box,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

// import "./index.css";

const OurNames = () => {
  const headingSize = useBreakpointValue({ base: "lg", sm: "2xl", md: "5xl" });
  const subHeadingSize = useBreakpointValue({
    base: "sm",
    sm: "lg",
    md: "4xl",
  });

  return (
    <Box w="100%" display={{ base: "none", md: "block" }}>
      <Center py={{ base: "none", md: "8px" }}>
        <Flex
          direction={{ base: "row", md: "column" }}
          justifyContent="center"
          alignItems="center"
          w="100%"
          maxW="600px"
          mt="8px"
          className="fade-in-immediate"
        >
          <Heading
            lineHeight="40px"
            letterSpacing="3px"
            fontSize={headingSize}
            fontWeight="600"
          >
            KEVIN
          </Heading>
          <Heading
            mx="6px"
            fontSize={subHeadingSize}
            // fontSize="4xl"
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
            fontWeight="600"
          >
            SHANNON
          </Heading>
        </Flex>
      </Center>

      <HStack justifyContent="center" display={{ base: "none", md: "flex" }}>
        {/* <Box h="4px" bg="neutral.black" w="100%" maxW="340px" /> */}
        <Box h="4px" bg="neutral.black" w="100%" maxW="736px" />
      </HStack>
    </Box>
  );
};

export default OurNames;
