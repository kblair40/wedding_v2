import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Link, Text, Flex, Box } from "@chakra-ui/react";

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
      {/* <Box
        className="link-wrapper"
        borderBottom="3px solid #000"
        _after={{
          content: "",
          borderBottom: "3px solid #000",
          width: "10px",
          display: "block",
        }}
      > */}
      <Flex
        // border="1px solid green"
        className="link-wrapper"
        borderRadius="4px"
        py="4px"
        alignItems="center"
        px="12px"
        _hover={{
          ".nav-text": {
            // color: "white",
          },
        }}
        // _hover={{ bg: "neutral.100" }}
        _focus={{ bg: "neutral.50" }}
        _active={{ bg: "neutral.200" }}
        transition=".2s ease-in-out"
      >
        <Text className="nav-text" whiteSpace="nowrap">
          {children}
        </Text>
      </Flex>
      {/* </Box> */}
    </Link>
  );
};

export default NavLink;
