import React, { useEffect } from "react";
import {
  Text,
  Heading,
  Flex,
  Grid,
  GridItem,
  Box,
  Image,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import SectionLabel from "components/SectionLabel";

const Registry = ({ setInView }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  return (
    <Flex
      direction="column"
      alignItems="center"
      bg="#f7f5f1"
      pb="24px"
      // pt="24px"
    >
      <SectionLabel label="registry" />
    </Flex>
  );
};

export default Registry;
