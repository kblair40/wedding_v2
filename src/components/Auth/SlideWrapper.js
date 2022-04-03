import React from "react";
import { Box } from "@chakra-ui/react";

const SlideWrapper = ({ style, children }) => {
  return (
    <Box
      minW="300px"
      maxW="480px"
      w="80vw"
      // border="1px solid red"
      shadow="lg"
      position="fixed"
      transition="300ms ease-in-out"
      bg="white"
      border="1px solid #eee"
      p="4px"
      borderRadius="4px"
      transform="translate(-50%, -50%)"
      zIndex={2}
      style={style}
    >
      {children}
    </Box>
  );
};

export default SlideWrapper;
