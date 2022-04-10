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
    direction: "column",
    w: "100%",
    // justifyContent: "center",
    // border: "1px solid black",
    justifyContent: center ? "center" : undefined,
    ...rest,
  };

  const boxStyles = {
    w: "100%",
    maxW: !responsive ? "100%" : { base: "480px", md: "500px", xl: "1280px" },
    // : { base: "480px", md: "768px", xl: "1280px" },
    border: showBorder ? "1px solid #ccc" : "none",
  };

  return (
    <Flex {...flexStyles}>
      <Box {...boxStyles}>{children}</Box>
    </Flex>
  );
};

export default PageContainer;
