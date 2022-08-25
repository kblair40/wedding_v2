import React, { useEffect, useState } from "react";
import { Flex, Box, Icon, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { FaRegHeart } from "react-icons/fa";

import shanface from "assets/us/shanface.jpg";
import kevface from "assets/us/kevface.jpg";
import kev from "assets/us/kev.jpg";
import shan from "assets/us/shan.jpg";
import { Partier } from "sections/WeddingParty";

const Us = () => {
  const [transitionAmount, setTransitionAmount] = useState();

  const isMobile = useBreakpointValue({ base: true, sm: false });

  const options = {
    threshold: 1,
    triggerOnce: true,
  };

  const [inViewRef, inView] = useInView(options);

  useEffect(() => {
    // console.log("INNER WIDTH:", window.innerWidth);
    let windowWidth = window.innerWidth;
    if (windowWidth > 480) {
      setTransitionAmount((windowWidth - 480) / 2);
    }
  }, [inView]);

  const slideTogether = () => {
    gsap.to(".bride", { duration: 1, x: transitionAmount });
    gsap.to(".groom", { duration: 1, x: -transitionAmount });
    gsap.to(".heart", { duration: 2, opacity: 1 });
  };

  const slideApart = () => {
    gsap.to(".bride", { duration: 1, x: 0 });
    gsap.to(".groom", { duration: 1, x: 0 });
    gsap.to(".heart", { duration: 1, opacity: 0 });
  };

  useEffect(() => {
    if (!transitionAmount || isMobile) {
      return;
    }

    if (inView) {
      slideTogether();
    } else {
      slideApart();
    }
  }, [inView]);

  let shift = useBreakpointValue({ base: 0, sm: "60px" });
  let kevImg = useBreakpointValue({ base: kev, sm: kevface });
  let shanImg = useBreakpointValue({ base: shan, sm: shanface });

  return (
    <Flex
      mb={{ base: "32px", sm: "80px" }}
      mt={{ base: 0, sm: "48px" }}
      w="100%"
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent={{ sm: "space-between" }}
      alignItems="center"
      ref={inViewRef}
    >
      <Box className="us bride" position="relative" top={shift}>
        <Partier
          name="shannon dunne"
          role="BRIDE"
          imgURL={shanImg}
          position="center 20%"
        />
      </Box>
      <Box className="heart" position="relative" bottom="16px" opacity={0}>
        <Icon as={FaRegHeart} boxSize="40px" fill="error.400" />
      </Box>
      <Box className="us groom" position="relative" bottom={shift}>
        <Partier name="kevin blair" role="GROOM" imgURL={kevImg} />
      </Box>
    </Flex>
  );
};

export default Us;
