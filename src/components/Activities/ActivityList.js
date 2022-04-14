import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const ActivityList = ({ label, children }) => {
  return (
    <Box border="1px solid black" p="12px 8px">
      <Heading
        fontWeight="700"
        mb="16px"
        fontSize="2xl"
        //
      >
        {label}
      </Heading>
      {children}
    </Box>
  );
};

export default ActivityList;
