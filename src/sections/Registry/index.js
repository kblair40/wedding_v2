import React, { useEffect } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { glass } from "utils/styles";
import SectionLabel from "components/SectionLabel";
import casa1 from "assets/images/casa/casa1.png";
import casa2 from "assets/images/casa/casa2.png";
import casa3 from "assets/images/casa/casa3.png";
import casa5 from "assets/images/casa/casa5.png";
import casa8 from "assets/images/casa/casa8.png";

const Registry = ({ setInView }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    console.log("REGISTRY IN VIEW:", inView);
    if (inView) {
      setInView("registry");
    }
  }, [inView]);

  const buttonStyles = {
    px: "32px",
    bg: "white",
    transition: ".2s ease-in-out",
    border: "1px solid",
    borderColor: "neutral.black",
    variant: "outline",
    fontWeight: "600",
    mt: "24px",
    _hover: {
      bg: "neutral.900",
      color: "#fff",
    },
    _active: { bg: "text.secondary" },
  };

  return (
    <Flex
      ref={inViewRef}
      direction="column"
      alignItems="center"
      bg="#f7f5f1"
      pb="24px"
      pt="24px"
      px={{ base: "16px" }}
      backgroundImage={casa5}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        p={{ base: "16px" }}
        shadow="md"
        justifyContent={{ base: "center" }}
        // bg="rgba(255, 255, 255, 0.97)"
        maxW={{ base: "350px", sm: "450px", md: "600px" }}
        flexDirection="column"
        alignItems="center"
        {...glass}
      >
        <SectionLabel label="registry" pt="8px" />
        <Text
          textAlign="center"
          fontWeight="500"
          //
        >
          The best present you could possibly give us is the celebration of our
          marriage. However, if you’d like to spoil us, we’ve picked out a few
          items, activities, and charities that pique our interests.
        </Text>

        <Button {...buttonStyles}>See Registry on Zola</Button>
      </Flex>
    </Flex>
  );
};

export default Registry;
