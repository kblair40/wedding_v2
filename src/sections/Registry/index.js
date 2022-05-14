import React, { useEffect } from "react";
import {
  Flex,
  Text,
  Button,
  Image,
  useToast,
  Box,
  Icon,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { FiAlertTriangle } from "react-icons/fi";

import { glass } from "utils/styles";
import SectionLabel from "components/SectionLabel";
import casa7 from "assets/images/casa/casa7.png";

const Registry = ({ setInView }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });
  const toast = useToast();

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
    fontWeight: "400",
    fontStyle: "italic",
    mt: "24px",
    _hover: {
      bg: "neutral.900",
      color: "#fff",
    },
    _active: { bg: "text.secondary" },
  };

  const handleClick = () => {
    toast({
      duration: 1000,
      render: () => (
        <Flex
          p="16px 24px"
          bg="secondary.100"
          borderRadius="4px"
          alignItems="center"
        >
          <Icon as={FiAlertTriangle} mr="8px" />
          <Text fontWeight="500" fontSize="xl" lineHeight="100%">
            Sorry, our registry isn't ready yet
          </Text>
        </Flex>
      ),
    });
  };

  return (
    <Flex
      ref={inViewRef}
      direction="column"
      alignItems="center"
      pb="24px"
      // pt="24px"
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
      />
      <Flex
        mt="24px"
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
        <Text textAlign="center" fontWeight="500">
          We’ve picked out a few items and activities that piqued our interest.
        </Text>
        {/* <Text
          textAlign="center"
          fontSize="sm"
          fontWeight="400"
          fontStyle="italic"
        > */}
        {/* </Text> */}

        <Button onClick={handleClick} {...buttonStyles}>
          Registry coming soon...
        </Button>
        {/* <Button {...buttonStyles}>See Registry on Zola</Button> */}
      </Flex>
    </Flex>
  );
};

export default Registry;
