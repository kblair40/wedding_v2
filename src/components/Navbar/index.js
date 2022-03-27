import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Button, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack w="100%" justifyContent="center" spacing="24px" bg="#eee">
      <Link to="/">Home</Link>
      <Link to="/thingstodo">Things to do</Link>
    </HStack>
  );
};

export default Navbar;
