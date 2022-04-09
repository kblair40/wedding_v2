import React from "react";
import { Box } from "@chakra-ui/react";

const Paper = ({ children, ...rest }) => {
  return (
    <Box shadow="sm" borderRadius="8px" p="8px" {...rest}>
      {children}
    </Box>
  );
};

export default Paper;
