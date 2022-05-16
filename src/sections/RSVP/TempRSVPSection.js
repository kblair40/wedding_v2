import React, { useEffect } from "react";
import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { glass } from "utils/styles";
import SectionLabel from "components/SectionLabel";
import casa8 from "assets/images/casa/casa8.png"; // preferred
import casa_new from "assets/casa_new.jpg";
import "./index.css";

const TempRSVPSection = ({ setInView }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    if (inView) {
      setInView("rsvp");
    }
  }, [inView]);

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      w="100%"
      pb="24px"
      px="24px"
    >
      <Image
        src={casa_new}
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
          >
            <Heading textAlign="center" fontWeight="600" mb="16px">
              To follow with Invitation{" "}
            </Heading>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TempRSVPSection;