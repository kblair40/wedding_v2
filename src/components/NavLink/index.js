import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Link, Text, Flex } from "@chakra-ui/react";

const NavLink = ({ to, children }) => {
  return (
    <Link
      as={RRLink}
      to={to}
      _focus={{ outline: "none" }}
      fontFamily="Josefin Sans"
      fontWeight="500"
      _hover={{ textDecoration: "none", color: "text.secondary" }}
    >
      <Flex py="8px" alignItems="center" px="12px">
        <Text
          // fontFamily="EB Garamond"
          whiteSpace="nowrap"
          className="nav-link"
        >
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

export default NavLink;
