import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const NavLink = ({ to, children }) => {
  return (
    <Link
      as={RRLink}
      to={to}
      _focus={{ outline: "none" }}
      _hover={{ textDecoration: "none" }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
