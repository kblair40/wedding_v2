import React, { useEffect, useRef } from "react";
import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { ChevronDownIcon } from "components/Icons";
import mainbg from "assets/images/mainbg.webp";
import mainbg_sm from "assets/images/mainbg_sm.webp";
import mainbg_md from "assets/images/mainbg_md.webp";
import OurNames from "components/MainBackground/OurNames";
import { fontSizes } from "utils/custom-theme";

const MainBackground = ({
  setInView,
  handleLeaveTopSection,
  handleEnterTopSection,
  onMainBgImageLoaded,
}) => {
  const options = { threshold: 1 };
  const [inViewRef, inView] = useInView(options);

  const img = useBreakpointValue({
    base: mainbg_sm,
    xs: mainbg_md,
    lg: mainbg,
  });

  const [atAllInViewRef, atAllInView] = useInView({ threshold: 0.03 });

  const imageRef = useRef();
  const arrowDownRef = useRef();

  const fadeInImage = () => {
    onMainBgImageLoaded();
    imageRef.current.classList.add("fade-in-immediate");
  };

  useEffect(() => {
    if (atAllInView) {
      handleEnterTopSection();
    } else {
      handleLeaveTopSection();
    }
  }, [atAllInView]);

  const didMount = useRef(false);
  useEffect(() => {
    if (!didMount.current) {
      arrowDownRef.current.classList.add("fade-in-delayed");
      didMount.current = true;
    }

    if (inView) {
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
          opacity={0}
          boxSize="100%"
          position="absolute"
          objectFit="cover"
          loading="eager"
          ref={imageRef}
          onLoad={fadeInImage}
          src={img}
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

        <Box
          w="100%"
          ref={arrowDownRef}
          d="flex"
          justifyContent="center"
          opacity={0}
        >
          <ArrowDown />
        </Box>
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
      bottom={{ base: "82px", sm: "16px" }}
      mx="auto"
      zIndex={10}
    >
      <Text
        fontSize={{ base: fontSizes.mdt, sm: fontSizes.lgt, md: fontSizes.xlt }}
        letterSpacing="2px"
        color="#fff"
        fontWeight="500"
      >
        SCROLL FOR MORE
      </Text>
      <ChevronDownIcon
        fill="#fff"
        mt="8px"
        boxSize={{ base: "40px", md: "50px", lg: "60px" }}
      />
    </Flex>
  );
};
