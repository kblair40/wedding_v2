import React from "react";
import { Box, useBreakpointValue, Flex } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { MAX_WIDTHS } from "utils/constants";
import OurNames from "./OurNames";
import Navbar from "./Navbar";

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
      direction="column"
      alignItems="center"
      // border="1px solid black"
    >
      <Flex
        justify="center"
        w="100%"
        display={{ base: "none", md: "flex" }}
        ref={ref}
        zIndex={-1}
      >
        <OurNames />
      </Flex>

      <Box
        // border="1px solid black"
        transition=".5s ease-in-out"
        zIndex={1}
        bg="white"
        shadow={showShadow ? "sm" : "none"}
        top="0"
        sx={{
          position: "-webkit-sticky",
          position: "sticky",
        }}
        w="100%"
      >
        <Flex
          minHeight="50px"
          mt="8px"
          // border="1px solid orange"
          // w="100%"
          className="nav-container"
          justify="center"
          //
        >
          <Navbar />
        </Flex>
      </Box>
    </Flex>
  );
};

export default OurNamesPlusNav;
