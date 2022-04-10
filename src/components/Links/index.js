import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export const InternalLink = ({ children, to }) => {
  return (
    <Link
      as={RRLink}
      href={to}
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

export const ExternalLink = ({ children, to }) => {
  return (
    <InternalLink to={to} isExternal>
      {children}
    </InternalLink>
  );
};
