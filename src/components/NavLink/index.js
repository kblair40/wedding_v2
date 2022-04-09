import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Link, Text, Flex } from "@chakra-ui/react";

const NavLink = ({ to, children }) => {
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
      <Flex
        borderRadius="4px"
        py="8px"
        alignItems="center"
        px="12px"
        _hover={{ bg: "neutral.100" }}
        _focus={{ bg: "neutral.50" }}
        transition=".2s ease-in-out"
      >
        <Text whiteSpace="nowrap">{children}</Text>
      </Flex>
    </Link>
  );
};

export default NavLink;
