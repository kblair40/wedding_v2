import React, { useEffect, useState, useRef } from "react";
import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

import shanface from "assets/images/us/shanface.webp";
import kevface from "assets/images/us/kevface.webp";
import kev from "assets/images/us/kev.webp";
import shan from "assets/images/us/shan.webp";
import { Partier } from "sections/WeddingParty/WeddingParty";
import { HeartIcon } from "components/Icons";

const Us = () => {
  const [transitionAmount, setTransitionAmount] = useState();

  const isMobile = useBreakpointValue({ base: true, sm: false });

  const options = {
    threshold: 1,
    triggerOnce: true,
    // triggerOnce: false,
  };

  const brideRef = useRef();
  const groomRef = useRef();

  const [inViewRef, inView] = useInView(options);
  // const [upperInViewRef, upperInView] = useInView({
  //   threshold: 1,
  //   triggerOnce: false,
  // });
  // const [lowerInViewRef, lowerInView] = useInView({
  //   threshold: 1,
  //   triggerOnce: false,
  // });

  // useEffect(() => {
  //   console.log("UPPER/LOWER IN VIEW:", { lowerInView, upperInView });
  // }, [lowerInView, upperInView]);

  useEffect(() => {
    // console.log("INNER WIDTH:", window.innerWidth);
    let windowWidth = window.innerWidth;
    if (windowWidth > 480) {
      setTransitionAmount((windowWidth - 480) / 2);
    }
  }, [inView]);

  const slideTogether = () => {
    gsap.to(brideRef.current, {
      duration: 1,
      x: transitionAmount,
      // onComplete: () => (brideRef.current.style.position = "static"),
    });
    gsap.to(groomRef.current, {
      duration: 1,
      x: -transitionAmount,
      repeatRefresh: true,
    });
    gsap.to(".heart", { duration: 2, opacity: 1 });
  };

  const slideApart = () => {
    gsap.to(brideRef.current, { duration: 1, x: 0 });
    gsap.to(groomRef.current, { duration: 1, x: 0 });
    gsap.to(".heart", { duration: 1, opacity: 0 });
  };

  useEffect(() => {
    if (!transitionAmount || isMobile) {
      return;
    }

    console.log("\n\nUS IN VIEW:", inView, "\n\n");

    if (inView) {
      slideTogether();
    } else {
      slideApart();
    }
  }, [inView]);

  let shift = useBreakpointValue({ base: 0, sm: "60px" });
  let kevImg = useBreakpointValue({ base: kev, sm: kevface });
  let shanImg = useBreakpointValue({ base: shan, sm: shanface });
  let imgSize = useBreakpointValue({ base: "250px", sm: "180px" });

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
      <Box ref={brideRef} className="us bride" position="relative" top={shift}>
        <Partier
          name="shannon dunne"
          role="BRIDE"
          imgURL={shanImg}
          position="center 20%"
        />
      </Box>

      <Box className="heart" position="relative" bottom="16px" opacity={0}>
        <HeartIcon />
      </Box>

      <Box
        ref={groomRef}
        className="us groom"
        position="relative"
        bottom={shift}
        sx={{
          img: {
            height: imgSize,
            width: imgSize,
          },
        }}
      >
        <Partier name="kevin blair" role="GROOM" imgURL={kevImg} />
      </Box>
    </Flex>
  );
};

export default Us;
