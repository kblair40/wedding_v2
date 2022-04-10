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
    <VStack w="100%">
      <HStack w="100%" align="center" justify="space-between">
        <Heading>Name</Heading>
        <IconButton
          bg="transparent"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          icon={<Icon as={BsArrowRight} />}
        />
      </HStack>
      <Text lineHeight="20px">
        Culpa mollit Lorem pariatur minim velit non. Veniam irure laborum est ut
        ad.
      </Text>
    </VStack>
  );
};

export default Activity;
