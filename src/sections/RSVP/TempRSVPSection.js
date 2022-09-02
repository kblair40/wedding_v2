import React, { useEffect } from "react";
import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { glass } from "utils/styles";
import SectionLabel from "components/SectionLabel";
import casa_new from "assets/images/casa/casa_new.webp";
import casa_new_sm from "assets/images/casa/casa_new_sm.webp";
import "./index.css";

const TempRSVPSection = ({ setInView }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    if (inView) {
      setInView("rsvp");
    }
  }, [inView]);

  const bgImage = useBreakpointValue({ base: casa_new_sm, xs: casa_new });

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      w="100%"
      pb="24px"
      px="24px"
      minW="350px"
    >
      <Image
        src={bgImage}
        w="100%"
        minW="900px"
        zIndex="-1"
        position="absolute"
      />
      <Flex
        mt="24px"
        p={{ base: "16px" }}
        shadow="md"
        justifyContent={{ base: "center" }}
        maxW={{ base: "350px", sm: "450px", md: "600px" }}
        flexDirection="column"
        alignItems="center"
        w="100%"
        {...glass}
      >
        <SectionLabel label="rsvp" />

        <Box ref={inViewRef} />

        <Flex w="100%" justifyContent="center">
          <Box
            minW="340px"
            maxW={{
              base: "420px",
              sm: "524px", // allows full placeholder text to show
              md: "720px",
              lg: "900px",
            }}
            px="24px"
          >
            <Text textAlign="center" mb="4px" fontWeight="500">
              Check back soon!
            </Text>
            <Text textAlign="center" mb="16px">
              When invites go out, you'll be able to RSVP right here.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TempRSVPSection;
// 419
