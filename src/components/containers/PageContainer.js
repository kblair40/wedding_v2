import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const PageContainer = ({ children, center, px = "24px", ...rest }) => {
  return (
    <Flex
      // position="absolute"
      // top={"260px"}
      // bottom={0}
      // right={0}
      // left={0}
      // backgroundColor="rgba(0,0,0,0)"
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
