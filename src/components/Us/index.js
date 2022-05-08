import React, { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

import { Partier } from "sections/WeddingParty";
import kevin from "assets/galleryImages/shannon/shan_eight.jpg";
import shannon2 from "assets/images/wedding_party/meandshannon.jpg";

const Us = () => {
  const [transitionAmount, setTransitionAmount] = useState();

  const options = {
    threshold: 1,
  };

  const [inViewRef, inView] = useInView(options);

  useEffect(() => {
    console.log("INNER WIDTH:", window.innerWidth);
    let windowWidth = window.innerWidth;
    if (windowWidth > 480) {
      setTransitionAmount((windowWidth - 480) / 2);
    }
  }, [inView]);

  const dims = {
    480: 0,
    500: 10,
    600: 60,
    700: 110,
    800: 160,
    900: 210,
  };

  const slideTogether = () => {
    gsap.to(".bride", { duration: 1, x: transitionAmount });
    gsap.to(".groom", { duration: 1, x: -transitionAmount });
  };

  const slideApart = () => {
    gsap.to(".bride", { duration: 1, x: 0 });
    gsap.to(".groom", { duration: 1, x: 0 });
  };

  useEffect(() => {
    if (!transitionAmount) {
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
      justifyContent="space-between"
      ref={inViewRef}
      sx={{
        ".us": {
          // border: "1px solid #bbb",
        },
        ".bride": {
          // border: "1px solid red",
        },
        ".groom": {
          // border: "1px solid blue",
        },
      }}
    >
      <Box className="us bride">
        <Partier
          name="shannon dunne"
          role="BRIDE"
          imgURL={shannon2}
          position="center 20%"
        />
      </Box>
      <Box className="us groom">
        <Partier name="kevin blair" role="GROOM" imgURL={kevin} />
      </Box>
    </Flex>
  );
};

export default Us;
