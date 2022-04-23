import React, { useEffect, useRef } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { MdOutlineChevronRight } from "react-icons/md";

import ClockBody from "./ClockBody";
import "./index.css";

const CountdownClock = () => {
  const containerRef = useRef();
  const showButtonRef = useRef();
  const hiding = useRef(true);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("animationend", onHideOrShowClock);
    }

    if (showButtonRef.current) {
      showButtonRef.current.addEventListener(
        "animationend",
        onHideOrShowButton
      );
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "animationend",
          onHideOrShowClock
        );
      }

      if (showButtonRef.current) {
        showButtonRef.current.removeEventListener(
          "animationend",
          onHideOrShowButton
        );
      }
    };
  }, [containerRef.current, showButtonRef.current]);

  const onHideOrShowButton = () => {
    if (!hiding.current) {
      console.log("showing clock");
      containerRef.current.classList.remove("slide-out");
      containerRef.current.classList.add("slide-in");
    } else {
      hiding.current = false;
    }
  };

  const onHideOrShowClock = () => {
    if (hiding.current) {
      showButtonRef.current.classList.remove("hidden");
      showButtonRef.current.classList.add("slide-in");
    } else {
      hiding.current = true;
    }
  };

  const handleHideClock = () => {
    containerRef.current.classList.remove("slide-in");
    containerRef.current.classList.add("slide-out");
  };

  const handleShowClock = () => {
    showButtonRef.current.classList.remove("slide-in");
    showButtonRef.current.classList.add("slide-out");
  };

  const baseStyles = {
    position: "fixed",
    bg: "neutral.50",
    shadow: "md",
    zIndex: 100,
  };

  return (
    <Box>
      <Box
        ref={containerRef}
        display={{ base: "none", sm: "block" }}
        left={0}
        top="30%"
        p="8px"
        borderRadius="0 2px 2px 0"
        {...baseStyles}
      >
        <ClockBody onHide={handleHideClock} onShow={handleShowClock} />
      </Box>
      <Box
        className="hidden"
        ref={showButtonRef}
        borderRadius="full"
        left="4px"
        top="40%"
        {...baseStyles}
      >
        <IconButton
          onClick={handleShowClock}
          icon={<MdOutlineChevronRight />}
          size="sm"
          borderRadius="full"
        />
      </Box>
    </Box>
  );
};

export default CountdownClock;
