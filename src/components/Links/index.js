import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export const InternalLink = ({ children, to, ...rest }) => {
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
      {...rest}
    >
      {children}
    </Link>
  );
};

export const ExternalLink = ({ children, to, ...rest }) => {
  return (
    <Link
      // as={RRLink}
      href={to}
      _focus={{ outline: "none" }}
      fontWeight="500"
      color="text.primary"
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
