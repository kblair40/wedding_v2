import React, { useEffect } from "react";
import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import Schedule from "sections/Schedule";
import ActivitiesContainer from "./ActivitiesContainer";

const Activities = ({ setInView }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    console.log("ACTIVITIES IN VIEW:", inView);
    if (inView) {
      setInView("activities");
    }
  }, [inView]);

  const pl = useBreakpointValue({
    base: "0",
    sm: "2.5rem",
    md: "3rem",
  });

  return (
    <Flex alignItems="center" direction="column" w="100%" pt="24px">
      <Schedule />
      <Box ref={inViewRef} />
      <ActivitiesContainer />
    </Flex>
  );
};

export default Activities;
