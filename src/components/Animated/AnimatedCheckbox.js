import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { GiCheckMark } from "react-icons/gi";

import "./index.css";

const AnimatedCheckbox = () => {
  return (
    <Box
      p="6px"
      position="relative"
      w="min-content"
      // border="1px solid black"
      //
    >
      <Box
        boxSize="16px"
        border="1px solid #626262"
        borderRadius="4px"
        _hover={{ cursor: "pointer" }}
        // position="relative"
      >
        {/*  */}
        <Check />
      </Box>
    </Box>
  );
};

export default AnimatedCheckbox;

const Check = () => {
  return (
    <Icon
      as={GiCheckMark}
      position="absolute"
      boxSize="24px"
      bottom="6px"
      right="0px"
      fill="#313131"
      //
    />
  );
};
