import React from "react";

import {
  Heading,
  Text,
  Button,
  Icon,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import Paper from "components/containers/Paper";
import { MdOutlineFastfood } from "react-icons/md";
import Activity from "components/Activity";

const ToDoToEatCard = ({ heading }) => {
  return (
    <Paper px="20px">
      <Flex
        // border="1px solid #ccc"
        justify="center"
        align="center"
        py="32px"
        direction="column"
      >
        <Icon as={MdOutlineFastfood} boxSize="40px" />
        <Heading
          textAlign="left"
          alignSelf="start"
          fontWeight="500"
          fontSize="4xl"
          mt="32px"
        >
          {heading}
        </Heading>
        <VStack mt="24px">
          <Activity />
          <Activity />
          <Activity />
        </VStack>
      </Flex>
    </Paper>
  );
};

export default ToDoToEatCard;
