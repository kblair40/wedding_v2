import React, { useEffect } from "react";
import { Box, Icon, Flex, Text } from "@chakra-ui/react";
import { BsArrowDownLeft } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

import color_hor_img from "assets/images/dock_kiss.jpg";
import bg1 from "assets/images/bg1.jpg";
import bg2 from "assets/images/bg2.jpg";
import bg3 from "assets/images/bg3.jpg";
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
      // border="1px solid green"
      display="flex"
      justifyContent="center"
    >
      <Box
        className="fade-in-immediate"
        zIndex={-1}
        position="relative"
        bgImage={bg1}
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
        bgImage="linear-gradient(rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.2))"
      />

      <Box
        position="absolute"
        top="96px"
        left="0"
        boxSize="100%"
        zIndex={1}
        // border="1px solid red"
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
    <Icon
      as={BsArrowDownLeft}
      transform="rotate(-45deg)"
      h="100px"
      color="#fff"
      w="60px"
    />
  </Flex>
);
