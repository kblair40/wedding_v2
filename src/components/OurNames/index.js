import React from "react";
import { Center, Flex, Heading } from "@chakra-ui/react";

const OurNames = () => {
  return (
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
        <Heading letterSpacing="1.5px" fontSize="5xl">
          Kevin
        </Heading>
        <Heading fontSize="4xl"> &nbsp;&&nbsp; </Heading>
        <Heading letterSpacing="1.5px" fontSize="5xl">
          Shannon
        </Heading>
      </Flex>
    </Center>
  );
};

export default OurNames;
