import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { MdOutlineChevronRight } from "react-icons/md";
import { useLocalstorageState } from "rooks";

import ClockBody from "./ClockBody";
import "./index.css";

const CountdownClock = () => {
  const [ready, setReady] = useState(false);
  const [showClock, setShowClock] = useLocalstorageState("showClock");
  const [clockOpacity, setClockOpacity] = useState(0);

  const containerRef = useRef();
  const showButtonRef = useRef();

  useEffect(() => {
    setReady(Boolean(containerRef.current) && Boolean(showButtonRef.current));
  }, [containerRef.current, showButtonRef.current]);

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
      // console.log("\n\n SHOW THE CLOCK \n\n");
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
      // console.log("\n\n DO NOT SHOW THE CLOCK \n\n");
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

  const baseStyles = {
    bg: "neutral.50",
    shadow: "md",
    zIndex: 100,
  };

  return (
    <Box className="vertical-center">
      <React.Fragment>
        <Box
          ref={containerRef}
          opacity={clockOpacity}
          left={0}
          transition="opacity .3s"
          p="8px"
          borderRadius="0 2px 2px 0"
          {...baseStyles}
        >
          <ClockBody onHide={onHideClock} />
        </Box>

        <Box
          className="vertical-center"
          ref={showButtonRef}
          borderRadius="full"
          left="4px"
          transition="opacity 1s"
          opacity={ready ? 1 : 0} // prevents initial flicker
          {...baseStyles}
        >
          <IconButton
            onClick={onShowClock}
            icon={<MdOutlineChevronRight size={24} />}
            size="xs"
            borderRadius="full"
          />
        </Box>
      </React.Fragment>
    </Box>
  );
};

export default CountdownClock;
