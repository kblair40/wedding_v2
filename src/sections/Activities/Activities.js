import React, { useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import Schedule from "sections/Schedule";
import ActivitiesContainer from "./ActivitiesContainer";

const Activities = ({ setInView }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    if (inView) {
      setInView("activities");
    }
  }, [inView]);

  return (
    <Flex alignItems="center" direction="column" w="100%">
      <Schedule />
      <Box ref={inViewRef} />
      <ActivitiesContainer />
    </Flex>
  );
};

export default Activities;
