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
        // everything below is new
        zIndex={10}
        h="100vh"
      >
        <Image
          src={mainbg}
          boxSize="100%"
          position="absolute"
          objectFit="cover"
        />

        {/* <Box
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
        /> */}

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

const ArrowDown = () => (
  <Flex
    direction="column"
    alignItems="center"
    position="absolute"
    bottom="70px"
    mx="auto"
  >
    <Text
      fontSize={{ base: "lg", sm: "xl" }}
      letterSpacing="2.5px"
      color="#fff"
      fontWeight="500"
    >
      SCROLL FOR MORE
    </Text>
    <Icon
      mt="8px"
      as={BsChevronDown}
      color="#fff"
      boxSize={{ base: "40px", sm: "60px" }}
    />
  </Flex>
);
