import React, { useEffect } from "react";
import { Box, Icon, Flex, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { BsChevronDown } from "react-icons/bs";
import mainbg from "assets/images/mainbg.jpg";
import OurNames from "components/OurNames";

const MainBackground = ({ setInView }) => {
  const options = { threshold: 1 };
  const [inViewRef, inView] = useInView(options);

  useEffect(() => {
    console.log("HOME IN VIEW:", inView);
    if (inView) {
      setInView("top");
    }
  }, [inView]);

  return (
    <Box
      ref={inViewRef}
      position="relative"
      display="flex"
      justifyContent="center"
    >
      <Box
        className="fade-in-immediate"
        zIndex={-1}
        position="relative"
        bgImage={mainbg}
        w="100vw"
        h={{ base: "100vh" }}
        bgPosition={{ base: "center 70%", md: "center 70%" }}
        bgAttachment="fixed"
        bgRepeat="no-repeat"
        backgroundSize="cover"
      />

      <Box
        position="absolute"
        h="100vh"
        w="100vw"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.45),
        rgba(0, 0, 0, 0.2))"
      />

      <Box
        position="absolute"
        top={{ base: "64px", md: "80px" }}
        left="0"
        boxSize="100%"
        zIndex={1}
      >
        <OurNames />
      </Box>

      <ArrowDown />
    </Box>
  );
};

export default MainBackground;

const ArrowDown = () => (
  <Flex
    direction="column"
    alignItems="center"
    position="absolute"
    bottom="8px"
    mx="auto"
  >
    <Text fontSize="xl" letterSpacing="2.5px" color="#fff" fontWeight="500">
      SCROLL FOR MORE
    </Text>
    <Icon as={BsChevronDown} color="#fff" boxSize="70px" />
  </Flex>
);
