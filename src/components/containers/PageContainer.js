import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const PageContainer = ({ children, center }) => {
  return (
    <Flex w="100%" px="24px" justifyContent={center ? "center" : undefined}>
      <Box maxW="600px">{children}</Box>
    </Flex>
  );
};

export default PageContainer;
