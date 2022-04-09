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
        // border="1px solid green"
        borderRadius="full"
        py="4px"
        alignItems="center"
        px="12px"
        _hover={{ bg: "neutral.100" }}
        _focus={{ bg: "neutral.50" }}
        _active={{ bg: "neutral.200" }}
        transition=".2s ease-in-out"
      >
        <Text whiteSpace="nowrap" fontSize="lg">
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

export default NavLink;
