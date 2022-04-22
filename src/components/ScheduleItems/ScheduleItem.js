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

const ScheduleItem = () => {
  return (
    <Flex direction="column">
      <Flex justifyContent="space-between" w="100%">
        <Heading>rehearsal</Heading>
        <Text>12pm - 2pm</Text>
      </Flex>
      <Flex justifyContent="space-between" w="100%">
        <Flex direction="column">
          <Text>Wedding Party</Text>
          <Text>Dress: Casual</Text>
        </Flex>
        <Button variant="link">Casa Feliz</Button>
      </Flex>
    </Flex>
  );
};

export default ScheduleItem;
