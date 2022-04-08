import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import OurNames from "components/OurNames";
import Navbar from "components/Navbar";

const OurNamesPlusNav = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    console.log("\n\nIN VIEW:", inView);
    console.log("ENTRY:", entry, "\n\n");
  }, [inView]);

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
        // bg={inView ? "white" : "#F9F0F9"}
        shadow={inView ? "none" : "sm"}
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
