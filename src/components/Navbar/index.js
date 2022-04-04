import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Button, HStack, Flex } from "@chakra-ui/react";

import NavLink from "components/NavLink";

// Travel
// To Do/To Eat
// RSVP - big in the middle
// Registry
// Wedding Party
// Schedule
// Send Us a Message
const NAVBAR_ROUTES = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Travel",
    path: "/travel",
  },
  {
    label: "To Do/To Eat",
    path: "/thingstodo",
  },
  {
    label: "Registry",
    path: "/registry",
  },
  {
    label: "Wedding Party",
    path: "/weddingparty",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "RSVP",
    path: "/rsvp",
  },
  {
    label: "Admin Stuff",
    path: "/admin",
  },
];

const Navbar = () => {
  return (
    <Flex w="100%" justifyContent="center" maxW="1080px">
      {NAVBAR_ROUTES.map((navroute, i) => (
        <NavLink to={navroute.path} key={i}>
          <Flex alignItems="center" px="12px" py="20px">
            <Text
              fontFamily="EB Garamond"
              whiteSpace="nowrap"
              _hover={{ color: "text.tertiary" }}
            >
              {navroute.label}
            </Text>
          </Flex>
        </NavLink>
      ))}
    </Flex>
  );
};

export default Navbar;
