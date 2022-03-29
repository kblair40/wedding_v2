import React from "react";
import {
  Box,
  VStack,
  Text,
  Heading,
  Image,
  AspectRatio,
  Flex,
  Avatar,
} from "@chakra-ui/react";

const WeddingParty = () => {
  return (
    <Flex direction="row" mt="16px">
      <ColumnContainer>
        <Partier />
        <Partier />
        <Partier />
        <Partier />
      </ColumnContainer>
      <ColumnContainer>
        <Partier />
        <Partier />
        <Partier />
        <Partier />
      </ColumnContainer>
    </Flex>
  );
};

export default WeddingParty;

const Partier = () => {
  return (
    <VStack>
      <Avatar boxSize="100px" />
      <Text>
        Reprehenderit adipisicing est non nostrud duis. Elit duis pariatur ad
        ipsum dolor ullamco proident consequat aute elit aliqua reprehenderit
        nisi. Ad irure mollit et aute ea irure sit quis. Magna cillum ipsum do
        consectetur labore dolor velit velit ex est cupidatat nulla anim anim.
        Tempor reprehenderit deserunt dolor velit tempor duis Lorem sunt
        voluptate. Duis dolore ea consectetur reprehenderit. Ut occaecat
        consequat velit eiusmod laboris consequat amet nostrud ea excepteur
        magna laborum.
      </Text>
    </VStack>
  );
};

const ColumnContainer = ({ children }) => {
  return (
    <Box w="50%">
      {/* <Heading textAlign="center" fontWeight="500" mb="24px" fontSize="3xl">
        {side}
      </Heading> */}
      <VStack px="24px" spacing="32px">
        {children}
      </VStack>
    </Box>
  );
};
