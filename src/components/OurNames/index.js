import React from "react";
import { Center, Flex, Heading, Box, HStack } from "@chakra-ui/react";

const OurNames = () => {
  return (
    <React.Fragment>
      <Center
        // border="1px solid #ddd"
        // py={{ base: "16px", sm: "24px" }}
        py="16px"
        //
      >
        <Flex
          flexDirection="column"
          // direction={{ base: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          <Heading letterSpacing="1.5px" fontSize="6xl">
            KEVIN
          </Heading>
          <Heading fontSize="xl"> AND </Heading>
          <Heading letterSpacing="1.5px" fontSize="6xl">
            SHANNON
          </Heading>
        </Flex>
      </Center>
      <HStack justifyContent="center">
        <Box h="4px" bg="black" w="100%" maxW="600px" />
      </HStack>
    </React.Fragment>
  );
};

export default OurNames;
