import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const PageContainer = ({ children, center, px = "24px", ...rest }) => {
  return (
    <Flex
      w="100%"
      px={px}
      justifyContent={center ? "center" : undefined}
      {...rest}
    >
      <Box>{children}</Box>
    </Flex>
  );
};

export default PageContainer;
