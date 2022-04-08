import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Link, Text, Flex } from "@chakra-ui/react";

const NavLink = ({ to, pinned, textColor, children }) => {
  return (
    <Link
      as={RRLink}
      to={to}
      _focus={{ outline: "none" }}
      fontFamily="Josefin Sans"
      fontWeight="500"
      // py="8px"
      _hover={{ textDecoration: "none", color: "text.secondary" }}
    >
      <Flex
        py="8px"
        // border="1px solid #ddd"
        alignItems="center"
        px="12px"
      >
        <Text
          // fontFamily="EB Garamond"
          whiteSpace="nowrap"
          // color={pinned ? "black" : "white"}
          // _hover={{ color: "text.tertiary" }}
          color={textColor}
        >
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

export default NavLink;
