import React from "react";
import { Box } from "@chakra-ui/react";

const Paper = ({ children, ...rest }) => {
  return (
    <Box
      m={0}
      shadow="md"
      borderRadius="8px"
      p="16px"
      bg="neutral.100"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Paper;
