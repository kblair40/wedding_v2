import React from "react";
import { Link } from "@chakra-ui/react";

import { colors } from "utils/custom-theme";

export const ExternalLink = ({ children, to, ...rest }) => {
  return (
    <Link
      href={to}
      _focus={{ outline: "none" }}
      fontWeight="500"
      // color="text.primary"
      color={colors.text.tertiary}
      _hover={{
        textDecoration: "none",
      }}
      isExternal
      {...rest}
    >
      {children}
    </Link>
  );
};
