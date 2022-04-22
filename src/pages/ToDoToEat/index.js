import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

import PageContainer from "components/containers/PageContainer";
import Activities from "components/Activities";

const ToDoToEat = () => {
  return (
    <Flex
      // border="1px solid green"
      className="fade-in-immediate"
      alignItems="center"
      direction="column"
      w="100%"
      pt="24px"
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
        ACTIVITIES
      </Text>

      <Box h="3px" w="50px" bg="neutral.800" />

      <Text
        my="24px"
        textAlign="center"
        fontSize="lg"
        fontWeight="500"
        minW="300px"
      >
        Here are a few local spots we think you'll like.
      </Text>

      <Activities />
    </Flex>
  );
};

export default ToDoToEat;
