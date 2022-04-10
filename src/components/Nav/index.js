import React, { useEffect } from "react";
import { Box, useBreakpointValue, Flex } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { MAX_WIDTHS } from "utils/constants";
import OurNames from "./OurNames";
import Navbar from "./Navbar";

const OurNamesPlusNav = () => {
  const {
    ref,
    inView,
    // entry
  } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    // console.log("\n\nIN VIEW:", inView);
    // console.log("ENTRY:", entry, "\n\n");
  }, [inView]);

  const showShadow = useBreakpointValue({
    base: true,
    md: !inView,
  });

  console.log("MAX WIDTHS:", MAX_WIDTHS());

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
          mt="8px"
          // border="1px solid orange"
          // w="100%"
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
