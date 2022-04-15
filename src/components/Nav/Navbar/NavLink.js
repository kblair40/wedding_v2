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
      <Box className="link-wrapper">
        <Flex
          borderRadius="4px"
          py="4px"
          alignItems="center"
          px="12px"
          transition=".2s ease-in-out"
        >
          <Text
            // className="nav-text"
            fontWeight="300"
            whiteSpace="nowrap"
          >
            {children}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default NavLink;
