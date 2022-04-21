import React from "react";
import { Box, useBreakpointValue, Flex } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

// import OurNames from "./OurNames";
import Navbar from "./Navbar";
import "./index.css";

const OurNamesPlusNav = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const showShadow = useBreakpointValue({
    base: true,
    md: !inView,
  });

  return (
    <Flex
      minHeight="50px"
      // mt="8px"
      className="fade-in-immediate"
      justify="center"
      position="fixed"
      top="0"
      w="100%"
      bg="#fff"
      zIndex={10}
    >
      <Navbar />
    </Flex>
  );
};

export default OurNamesPlusNav;
