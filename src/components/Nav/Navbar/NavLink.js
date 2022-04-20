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
      _hover={{
        textDecoration: "none",
      }}
    >
      <Box className="link-wrapper" borderRadius="4px">
        <Flex
          borderRadius="4px"
          py="4px"
          alignItems="center"
          px="12px"
          transition=".2s ease-in-out"
        >
          <Text
            color="text.primary"
            fontWeight="500"
            whiteSpace="nowrap"
            fontSize="15px"
          >
            {children}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default NavLink;
