import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

const SectionLabel = ({ label, pt = "32px", ...rest }) => {
  return (
    <Flex
      pt={pt}
      w="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      {...rest}
    >
      <Text
        fontSize={{ base: "3xl", sm: "48px" }}
        textAlign="center"
        fontWeight="500"
        w="100%"
        letterSpacing="2px"
        textTransform="uppercase"
      >
        {label}
      </Text>
      <Box h="3px" w="60px" bg="neutral.800" mb="32px" />
    </Flex>
  );
};

export default SectionLabel;
