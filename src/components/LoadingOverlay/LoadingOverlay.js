import React, { useRef, useEffect } from "react";
import { Center } from "@chakra-ui/react";
import { gsap } from "gsap";

import "./LoadingOverlay.css";
import { LogoLoadingIcon } from "components/Icons";

const LoadingOverlay = ({ hide }) => {
  const containerRef = useRef();
  // const spinnerRef = useRef();

  const fadeOut = () => {
    window.scrollTo({ x: 0, y: 0, behavior: "smooth" });
    gsap.to(containerRef.current, { ease: "none", duration: ".5", opacity: 0 });
  };

  useEffect(() => {
    if (hide) fadeOut();
  }, [hide]);

  return (
    <Center
      ref={containerRef}
      h="100vh"
      w="100vw"
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      zIndex={11}
      bg="white"
    >
      <div id="loading">
        <LogoLoadingIcon />
      </div>
    </Center>
  );
};

export default LoadingOverlay;
