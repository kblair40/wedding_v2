import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const SlideWrapper = ({ style, text, children }) => {
  return (
    <Box
      minW="300px"
      maxW="480px"
      w="90vw"
      maxH="85vh"
      // border="1px solid red"
      shadow="lg"
      position="fixed"
      transition="300ms ease-in-out"
      bg="white"
      border="1px solid #eee"
      p="4px"
      borderRadius="8px"
      transform="translate(-50%, -50%)"
      zIndex={2}
      style={style}
      overflowY="auto"
      // pb="16px"
    >
      {children}
    </Box>
  );
};

export default SlideWrapper;
