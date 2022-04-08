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
  const headingSize = useBreakpointValue({ base: "lg", sm: "3xl", md: "6xl" });
  const subHeadingSize = useBreakpointValue({
    base: "sm",
    sm: "lg",
    md: "3xl",
  });

  return (
    <React.Fragment>
      <Center
        py={{ base: "none", md: "8px" }}
        // border="2px solid orange"
      >
        <Flex
          direction={{ base: "row", md: "column" }}
          justifyContent="center"
          alignItems="center"
          // border="2px solid orange"
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

      <HStack justifyContent="center" display={{ base: "none", md: "flex" }}>
        <Box
          h="4px"
          bg="black"
          w="736px"
          // w={{ base: "350px", sm: "472px", md: "736px" }}
        />
      </HStack>
    </React.Fragment>
  );
};

export default OurNames;
