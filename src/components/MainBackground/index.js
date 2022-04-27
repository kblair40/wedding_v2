import React, { useEffect } from "react";
import { Box, Icon, Flex, Text, Image } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { BsChevronDown } from "react-icons/bs";

import mainbg from "assets/images/mainbg.jpg";
import OurNames from "components/OurNames";

const MainBackground = ({
  setInView,
  handleLeaveTopSection,
  handleEnterTopSection,
}) => {
  const options = { threshold: 1 };
  const [inViewRef, inView] = useInView(options);

  const [atAllInViewRef, atAllInView] = useInView({ threshold: 0.03 });

  useEffect(() => {
    console.log("\n\n\n\nAT ALL IN VIEW:", atAllInView, "\n\n\n\n");
    if (atAllInView) {
      handleEnterTopSection();
    } else {
      handleLeaveTopSection();
    }
  }, [atAllInView]);

  useEffect(() => {
    console.log("HOME IN VIEW:", inView);
    if (inView) {
      console.log("\n\nHOME IN VIEW:", inView, "\n\n");
      setInView("top");
    }
  }, [inView]);

  return (
    <Box ref={atAllInViewRef}>
      <Box
        ref={inViewRef}
        position="relative"
        display="flex"
        justifyContent="center"
        zIndex={10}
        h="100vh"
      >
        <Image
          src={mainbg}
          boxSize="100%"
          position="absolute"
          objectFit="cover"
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
    </Box>
  );
};

export default MainBackground;

const ArrowDown = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      position="absolute"
      bottom={{ base: "74px", sm: "16px" }}
      mx="auto"
      zIndex={10}
    >
      <Text
        fontSize={{ base: "mdt", sm: "lgt", md: "xlt" }}
        letterSpacing="2px"
        color="#fff"
        fontWeight="500"
      >
        SCROLL FOR MORE
      </Text>
      <Icon
        mt="8px"
        as={BsChevronDown}
        color="#fff"
        boxSize={{ base: "40px", md: "50px", lg: "60px" }}
      />
    </Flex>
  );
};
