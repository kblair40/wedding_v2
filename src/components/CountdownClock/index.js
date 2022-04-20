import React, { useState, useEffect } from "react";
import {
  Box,
  HStack,
  Text,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

const CountdownClock = () => {
  const [timeDiff, setTimeDiff] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
  });

  // const WEDDING_DATE = "2022-04-13";
  const WEDDING_DATE = "2023-01-21";

  useEffect(() => {
    calcTime();
    setInterval(() => {
      // call calcTime onMount and every 30 seconds after mount
      calcTime();
    }, 30000);
  }, []);

  const calcTime = () => {
    const weddingDate = new Date(WEDDING_DATE);
    const offsetMS = weddingDate.getTimezoneOffset() * 60 * 1000;

    const diffMS = new Date(WEDDING_DATE) - new Date() + offsetMS;

    const minutes = Math.floor((diffMS / 1000 / 60) % 60);
    const hours = Math.floor((diffMS / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diffMS / (1000 * 60 * 60 * 24));

    // console.log("TIME DIFF:", { days, hours, minutes });
    setTimeDiff({
      days,
      hours,
      minutes,
    });
  };

  const countdownFontSize = useBreakpointValue({
    base: "2xl",
    sm: "4xl",
  });

  return (
    <Box
      shadow="md"
      bg="white"
      py="8px"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
    >
      <HStack w="100%" justifyContent="center" spacing="16px" flexWrap="wrap">
        <Heading fontSize={countdownFontSize} whiteSpace="nowrap">
          {timeDiff.days ? timeDiff.days : "00"} Days
        </Heading>
        <Heading fontSize={countdownFontSize} whiteSpace="nowrap">
          {timeDiff.hours ? timeDiff.hours : "00"} Hours
        </Heading>
        <Heading fontSize={countdownFontSize} whiteSpace="nowrap">
          {timeDiff.minutes ? timeDiff.minutes : "00"} Minutes
        </Heading>
      </HStack>
      <Text
        mt="8px"
        fontSize="42px"
        fontFamily="Great Vibes"
        textAlign="center"
      >
        until we celebrate!
      </Text>
    </Box>
  );
};

export default CountdownClock;
