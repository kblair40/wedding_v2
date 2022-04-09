import React, { useEffect } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

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

  return (
    <React.Fragment>
      <Box
        w="100%"
        display={{ base: "none", md: "block" }}
        ref={ref}
        zIndex={-1}
      >
        <OurNames />
      </Box>

      <Box
        transition=".5s ease-in-out"
        zIndex={1}
        bg="white"
        shadow={showShadow ? "sm" : "none"}
        top="0"
        sx={{
          position: "-webkit-sticky",
          /* Safari */ position: "sticky",
        }}
      >
        <Navbar />
      </Box>
    </React.Fragment>
  );
};

export default OurNamesPlusNav;
