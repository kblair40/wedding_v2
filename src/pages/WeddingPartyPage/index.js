import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

import WeddingParty from "components/WeddingParty";
import PageContainer from "components/containers/PageContainer";

const WeddingPartyPage = () => {
  return (
    <Flex
      bg="neutral.100"
      // border="1px solid green"
      className="fade-in-immediate"
      alignItems="center"
      direction="column"
      w="100%"
      pt="24px"
      pb="32px"
    >
      <Text
        fontSize={{ base: "3xl", sm: "48px" }}
        textAlign="center"
        fontWeight="500"
        // border="1px solid orange"
        w="100%"
        mt="32px"
        letterSpacing="2px"
      >
        WEDDING PARTY
      </Text>

      <Box h="3px" w="50px" bg="neutral.800" mb="24px" />

      <WeddingParty />
    </Flex>
  );
};

export default WeddingPartyPage;

{
  /* <WeddingParty /> */
}
