import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

const InviteCard = ({ children, showBorder, ...rest }) => {
  return (
    <Box
      p="16px"
      border={showBorder ? "1px solid #ccc" : "none"}
      borderRadius="4px"
      {...rest}
    >
      <Heading
        textAlign="center"
        fontSize={{ base: "5xl" }}
        fontWeight="500"
        mb="16px"
      >
        RSVP
      </Heading>
      {children}
    </Box>
  );
};

export default InviteCard;
