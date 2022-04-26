import React from "react";
import { Flex } from "@chakra-ui/react";

import GettingThere from "sections/Travel/GettingThere";

const Travel = ({ setInView }) => {
  return (
    <Flex
      alignItems="center"
      direction="column"
      w="100%"
      // pt="24px"
      bg="neutral.100"
      // border="1px solid red"
    >
      {/* <WhenAndWhere /> */}
      {/* <Box ref={inViewRef} /> */}
      <GettingThere setInView={setInView} />
    </Flex>
  );
};

export default Travel;
