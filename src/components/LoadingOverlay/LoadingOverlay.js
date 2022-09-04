import React, { useRef, useEffect } from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { gsap } from "gsap";

const LoadingOverlay = ({ hide }) => {
  const ref = useRef();

  const fadeOut = () => {
    gsap.to(ref.current, { duration: ".5", opacity: 0 });
  };

  useEffect(() => {
    if (hide === true) {
      fadeOut();
    }
  }, [hide]);

  return (
    <Center
      ref={ref}
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
      <Spinner color="gray.600" />
    </Center>
  );
};

export default LoadingOverlay;
