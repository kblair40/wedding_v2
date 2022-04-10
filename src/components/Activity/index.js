import React from "react";
import {
  Box,
  VStack,
  Flex,
  HStack,
  Stack,
  Heading,
  Text,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

const Activity = () => {
  return (
    <VStack
      w="100%"
      spacing={{ base: 0, md: "4px" }}
      // border="1px solid #ccc"
    >
      <HStack
        w="100%"
        align="center"
        justify="space-between"
        // border="1px solid #ccc"
      >
        <Heading fontWeight="500">Name</Heading>
        <IconButton
          bg="transparent"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          icon={<Icon as={BsArrowRight} boxSize="24px" />}
        />
      </HStack>
      <Text lineHeight="20px" textAlign="left" alignSelf="start">
        Culpa mollit Lorem pariatur minim velit non. Veniam irure laborum est ut
        ad.
      </Text>
    </VStack>
  );
};

export default Activity;
