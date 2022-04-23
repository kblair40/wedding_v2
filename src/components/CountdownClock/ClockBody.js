import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Flex, Button, Icon, IconButton } from "@chakra-ui/react";
import { MdOutlineChevronLeft } from "react-icons/md";

import "./index.css";

const WEDDING_DATE = "2023-01-21";

const CountdownClock = ({ onShow, onHide }) => {
  const [timeDiff, setTimeDiff] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  });
  const [containerClass, setContainerClass] = useState("");

  const ref = useRef();
  const interval = useRef();

  useEffect(() => {
    calcTime();
    interval.current = setInterval(() => {
      // call calcTime onMount and every 30 seconds after mount
      calcTime();
    }, 1000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [ref.current]);

  const handleAnimationEnd = () => {
    console.log("\n\nENDED\n\n");
    setTimeout(() => {
      onHide();
    }, 2000);
  };

  const calcTime = () => {
    const weddingDate = new Date(WEDDING_DATE);
    const offsetMS = weddingDate.getTimezoneOffset() * 60 * 1000;

    const diffMS = new Date(WEDDING_DATE) - new Date() + offsetMS;

    const minutes = Math.floor((diffMS / 1000 / 60) % 60);
    const seconds = Math.floor((diffMS % (1000 * 60)) / 1000);
    const hours = Math.floor((diffMS / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diffMS / (1000 * 60 * 60 * 24));
    // console.log("SECONDS:", seconds);

    // console.log("TIME DIFF:", { days, hours, minutes });
    setTimeDiff({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <Box
      ref={ref}
      zIndex={100}
      px="8px"
      shadow="md"
      bg="neutral.50"
      py="8px"
      position="fixed"
      left={0}
      top="30%"
      borderRadius="0 2px 2px 0"
      className={containerClass}
    >
      <Flex direction="column" pt="8px">
        <TimeUnit unit={"Days"} value={timeDiff.days} />

        <TimeUnit unit={"Hours"} value={timeDiff.hours} />

        <TimeUnit unit={"Minutes"} value={timeDiff.minutes} />

        <TimeUnit unit={"Seconds"} value={timeDiff.seconds} />

        <Button
          onClick={() => setContainerClass("slide-out")}
          variant="link"
          size="sm"
          color="neutral.black"
          fontWeight="500"
          py="4px"
          _hover={{ textDecoration: "none" }}
          leftIcon={
            <MdOutlineChevronLeft style={{ width: "16px", height: "16px" }} />
          }
        >
          Hide
        </Button>
      </Flex>
    </Box>
  );
};

export default CountdownClock;

const TimeUnit = ({ value, unit }) => {
  const fontStyles = {
    fontSize: "md",
    whiteSpace: "nowrap",
    fontWeight: "400",
    color: "neutral.black",
    lineHeight: "20px",
  };

  const labelStyles = {
    fontSize: "xs",
    fontWeight: "500",
    textTransform: "uppercase",
    color: "neutral.black",
    letterSpacing: ".5px",
  };

  return (
    <Flex direction="column" alignItems="center" mb="8px">
      <Text {...fontStyles}>{value ? value : "00"}</Text>
      <Text {...labelStyles}>{unit}</Text>
    </Flex>
  );
};
