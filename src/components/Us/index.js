import React, { useEffect, useState } from "react";
import { Flex, Box, Icon, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { FaRegHeart } from "react-icons/fa";

import { Partier } from "sections/WeddingParty";
import kevin from "assets/galleryImages/shannon/shan_eight.jpg";
import shannon2 from "assets/images/wedding_party/meandshannon.jpg";

const Us = () => {
  const [transitionAmount, setTransitionAmount] = useState();

  const isMobile = useBreakpointValue({ base: true, sm: false });

  const options = {
    threshold: 1,
    triggerOnce: true,
  };

  const [inViewRef, inView] = useInView(options);

  useEffect(() => {
    console.log("INNER WIDTH:", window.innerWidth);
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

  return (
    <Flex
      mb="32px"
      w="100%"
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent={{ sm: "space-between" }}
      alignItems="center"
      ref={inViewRef}
    >
      <Box className="us bride">
        <Partier
          name="shannon dunne"
          role="BRIDE"
          imgURL={shannon2}
          position="center 20%"
        />
      </Box>
      <Box className="heart" position="relative" bottom="16px" opacity={0}>
        <Icon as={FaRegHeart} boxSize="40px" fill="error.400" />
      </Box>
      <Box className="us groom">
        <Partier name="kevin blair" role="GROOM" imgURL={kevin} />
      </Box>
    </Flex>
  );
};

export default Us;
