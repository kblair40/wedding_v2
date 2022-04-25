import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

const InviteCard = ({ children, showBorder, ...rest }) => {
  return (
    <Box
      p="0 16px 16px"
      border={showBorder ? "1px solid #ccc" : "none"}
      borderRadius="4px"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default InviteCard;
