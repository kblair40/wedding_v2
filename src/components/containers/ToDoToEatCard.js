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
import { IoBeerOutline } from "react-icons/io5";
import { GiSunglasses } from "react-icons/gi";
import { MdOutlineBeachAccess } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";
import Activity from "components/Activity";

const icons = {
  Eat: MdOutlineFastfood,
  Drink: IoBeerOutline,
  // Play: GiSunglasses,
  // Play: FaRegSun,
  Play: MdOutlineBeachAccess,
};

const ToDoToEatCard = ({ heading }) => {
  return (
    <Paper
      // px="20px"
      px={{ base: "20px" }}
      w="100%"
      // border="1px solid #dddd"
    >
      <Flex
        // border="1px solid #ccc"
        justify="center"
        align="center"
        py="32px"
        direction="column"
      >
        <Icon as={icons[heading]} boxSize="40px" />
        <Heading
          textAlign="left"
          alignSelf="start"
          fontWeight="500"
          fontSize="4xl"
          mt="32px"
        >
          {heading}
        </Heading>
        <VStack mt="24px" w="100%" spacing="16px">
          <Activity />
          <Activity />
          <Activity />
        </VStack>
      </Flex>
    </Paper>
  );
};

export default ToDoToEatCard;
