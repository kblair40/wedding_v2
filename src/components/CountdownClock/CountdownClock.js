import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { gsap } from "gsap";

import useLocalstorageState from "@rooks/use-localstorage-state";
import ClockBody from "./ClockBody";
import { ChevronRightIcon } from "components/Icons";
import { colors } from "utils/custom-theme";
import "./index.css";

const CountdownClock = () => {
  const [ready, setReady] = useState(false);
  const [showClock, setShowClock] = useLocalstorageState("showClock", false);
  const [clockOpacity, setClockOpacity] = useState(0);

  const containerRef = useRef();
  const showButtonRef = useRef();

  useEffect(() => {
    const isReady =
      Boolean(containerRef.current) && Boolean(showButtonRef.current);
    setReady(isReady);

    if (isReady) {
      gsap.to(".vertical-center", { duration: 0.5, delay: 0.75, opacity: 1 });
    }
  }, [containerRef, showButtonRef]);

  useEffect(() => {
    if (ready) {
      if (showClock) {
        showButtonRef.current.classList.add("hidden");
        setClockOpacity(1);
        containerRef.current.classList.add("slide-in");
      } else {
        showButtonRef.current.classList.add("slide-in");
      }
    }
  }, [ready]);

  useEffect(() => {
    if (!ready) return;

    if (showClock) {
      showButtonRef.current.classList.remove("slide-in"); // new
      showButtonRef.current.classList.add("slide-out");
      setTimeout(() => {
        containerRef.current.classList.remove("hidden");
        containerRef.current.classList.remove("slide-out"); // new
        if (clockOpacity === 0) {
          setClockOpacity(1);
        }
        containerRef.current.classList.add("slide-in");
      }, 500);
    } else {
      containerRef.current.classList.remove("slide-in"); // new
      containerRef.current.classList.add("slide-out");
      setTimeout(() => {
        showButtonRef.current.classList.remove("hidden");
        showButtonRef.current.classList.remove("slide-out"); // new
        showButtonRef.current.classList.add("slide-in");
      }, 500);
    }
  }, [showClock]);

  const onHideClock = () => {
    setShowClock(false);
  };
  const onShowClock = () => {
    setShowClock(true);
  };

  return (
    <Box className="vertical-center" opacity={0}>
      <React.Fragment>
        <Box
          ref={containerRef}
          opacity={clockOpacity}
          left={0}
          p="8px"
          borderRadius="0 2px 2px 0"
          shadow="md"
          bg="#fff"
          zIndex={10}
        >
          <ClockBody onHide={onHideClock} />
        </Box>

        <Box
          className="vertical-center"
          ref={showButtonRef}
          borderRadius="full"
          left="4px"
          transition="opacity 1s"
          shadow="sm"
          opacity={ready ? 1 : 0} // prevents initial flicker
        >
          <IconButton
            onClick={onShowClock}
            bg="white"
            icon={<ChevronRightIcon />}
            size="xs"
            borderRadius="full"
            transition=".2s"
            _hover={{ bg: colors.neutral["50"] }}
            zIndex={10}
          />
        </Box>
      </React.Fragment>
    </Box>
  );
};

export default CountdownClock;
