import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Link, Text, Flex, Box } from "@chakra-ui/react";

import { colors } from "utils/custom-theme";

const NavLink = ({ to, children }) => {
  return (
    <Link
      as={RRLink}
      to={to}
      _focus={{ outline: "none" }}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Box className="link-wrapper" borderRadius="4px" border="2px solid red">
        <Flex
          borderRadius="4px"
          py="4px"
          alignItems="center"
          px="12px"
          transition=".2s ease-in-out"
        >
          <Text
            color={colors.text.tertiary}
            fontWeight="400"
            whiteSpace="nowrap"
            fontSize="xl"
            textTransform="uppercase"
            letterSpacing="1px"
          >
            {children}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default NavLink;
