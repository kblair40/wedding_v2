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
  Divider,
} from "@chakra-ui/react";

import kevin from "assets/galleryImages/shannon/shan_eight.jpg";
import shannon from "assets/galleryImages/shannon/shan_six.jpg";

import five from "assets/galleryImages/shannon/shan_five.jpg";
import four from "assets/galleryImages/shannon/shan_four.jpg";
import three from "assets/galleryImages/shannon/shan_three.jpg";
import two from "assets/galleryImages/shannon/shan_two.jpg";

const WeddingParty = () => {
  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      mt="16px"
      alignItems="center"
    >
      <ColumnContainer>
        <Partier name="kevin blair" role="GROOM" imgURL={kevin} />
        <Partier name="caleb magnuson" role="BEST MAN" imgURL={five} />
        <Partier name="trevor weidner" role="GROOMSMAN" imgURL={four} />
        <Partier name="andrew payne" role="GROOMSMAN" imgURL={three} />
        <Partier name="ted keller" role="GROOMSMAN" imgURL={two} />
      </ColumnContainer>
      <Divider
        borderColor="neutral.400"
        mt="16px"
        mb="32px"
        display={{ sm: "none" }}
      />
      <ColumnContainer>
        <Partier name="shannon dunne" role="BRIDE" imgURL={shannon} />
        <Partier name="erin dunne" role="MAID OF HONOR" imgURL={two} />
        <Partier name="kelly dunne" role="MAID OF HONOR" imgURL={three} />
        <Partier name="karissa leith" role="BRIDESMAID" imgURL={four} />
        <Partier name="cassidy blair" role="BRIDESMAID" imgURL={five} />
      </ColumnContainer>
    </Flex>
  );
};

export default WeddingParty;

const Partier = ({ name, role, imgURL }) => {
  return (
    <Flex direction="column" alignItems="center">
      <Avatar boxSize={{ base: "250px", sm: "200px" }} mb="16px" src={imgURL} />
      <Heading
        fontWeight="700"
        fontSize="3xl"
        // border="1px solid black"
        // lineHeight="30px"
      >
        {name}
      </Heading>
      <Text
        letterSpacing="1.5px"
        // border="1px solid black"
      >
        {role}
      </Text>
    </Flex>
  );
};

const ColumnContainer = ({ children, mt }) => {
  return (
    <Box
      w={{ base: "100%", sm: "50%" }}
      // mt={mt}
      // border="1px solid green"
      //
    >
      {/* <Heading textAlign="center" fontWeight="500" mb="24px" fontSize="3xl">
        {side}
      </Heading> */}
      <VStack
        px="24px"
        spacing="32px"
        // border="1px solid red"
        //
      >
        {children}
      </VStack>
    </Box>
  );
};
