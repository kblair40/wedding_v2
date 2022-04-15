import React from "react";
import { Flex } from "@chakra-ui/react";

const PageContainer = ({
  children,
  center,
  showBorder,
  px = "24px",
  ...rest
}) => {
  const flexStyles = {
    px,
    direction: "column",
    w: "100%",
    justifyContent: center ? "center" : undefined,
    border: showBorder ? "1px solid orange" : "none",
    ...rest,
  };

  return <Flex {...flexStyles}>{children}</Flex>;
};

export default PageContainer;
