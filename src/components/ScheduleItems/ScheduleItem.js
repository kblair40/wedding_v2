import React from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Stack,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";

const ScheduleItem = ({
  heading,
  time,
  who,
  dressCode,
  locationName,
  locationMapLink,
}) => {
  const textStyles = {
    fontSize: "lg",
    fontWeight: "500",
  };

  return (
    <Flex
      direction="column"
      mb="40px"
      // border="1px solid black"
      w="100%"
      maxW="600px"
      // alignItems="center"
    >
      <Flex
        justifyContent="space-between"
        w="100%"
        mb="12px"
        // border="1px solid red"
      >
        <Heading size="3xl" fontWeight="700">
          {heading}
        </Heading>
        <Text {...textStyles}>{time}</Text>
      </Flex>
      <Flex justifyContent="space-between" w="100%" alignItems="flex-start">
        <Flex direction="column">
          <Text {...textStyles}>{who}</Text>
          <Text {...textStyles}>Dress: {dressCode}</Text>
        </Flex>
        <Button
          color="neutral.black"
          variant="link"
          fontSize="lg"
          textDecoration="underline"
          fontWeight="500"
        >
          {locationName}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ScheduleItem;
