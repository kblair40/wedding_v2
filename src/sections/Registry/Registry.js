import React, { useEffect } from "react";
import { Flex, Text, Button, Image, Link } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { glass } from "utils/styles";
import SectionLabel from "components/SectionLabel";
import casa7 from "assets/images/casa/casa7.webp";

const Registry = ({ setInView }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    // console.log("REGISTRY IN VIEW:", inView);
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
    fontWeight: "400",
    fontStyle: "italic",
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
      pb="24px"
      px={{ base: "16px" }}
      position="relative"
      overflow="hidden"
    >
      <Image
        src={casa7}
        w="100%"
        minW="900px"
        zIndex="-1"
        position="absolute"
        loading="lazy"
      />
      <Flex
        mt="24px"
        p={{ base: "16px" }}
        shadow="md"
        justifyContent={{ base: "center" }}
        maxW={{ base: "350px", sm: "450px", md: "600px" }}
        flexDirection="column"
        alignItems="center"
        {...glass}
      >
        <SectionLabel label="registry" pt="8px" />
        <Text textAlign="center" fontWeight="500">
          We've picked out a few items and activities that piqued our interest.
        </Text>

        <Link
          _hover={{ textDecoration: "none" }}
          href="https://www.zola.com/registry/shannonandkevin2023"
          isExternal
        >
          <Button {...buttonStyles}>Registry</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Registry;
