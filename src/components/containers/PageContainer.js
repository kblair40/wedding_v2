import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const PageContainer = ({
  children,
  center,
  responsive,
  showBorder,
  px = "24px",
  ...rest
}) => {
  const flexStyles = {
    px,
    w: "100%",
    justifyContent: center ? "center" : undefined,
    ...rest,
  };

  const boxStyles = {
    w: "100%",
    maxW: !responsive
      ? undefined
      : { base: "480px", md: "768px", xl: "1280px" },
    border: showBorder ? "1px solid #ccc" : "none",
  };

  return (
    <Flex {...flexStyles}>
      <Box {...boxStyles}>{children}</Box>
    </Flex>
  );
};

export default PageContainer;
