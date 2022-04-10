import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export const InternalLink = ({ children }) => {
  return (
    <Link
      as={RRLink}
      to={to}
      _focus={{ outline: "none" }}
      fontWeight="500"
      color="text.primary"
      _hover={{
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
};

export const ExternalLink = ({ children }) => {
  return <InternalLink isExternal>{children}</InternalLink>;
};
