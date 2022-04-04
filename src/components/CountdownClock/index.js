import React, { useState, useEffect } from "react";
import { Box, HStack, Text, Heading } from "@chakra-ui/react";

const CountdownClock = () => {
  const [timeDiff, setTimeDiff] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
  });

  const WEDDING_DATE = "2023-01-21";

  useEffect(() => {
    calcTime();
    setInterval(() => {
      // call calcTime onMount and every 30 seconds after mount
      calcTime();
    }, 30000);
  }, []);

  const calcTime = () => {
    const diffMS = Date.parse(WEDDING_DATE) - Date.parse(new Date());

    const minutes = Math.floor((diffMS / 1000 / 60) % 60);
    const hours = Math.floor((diffMS / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diffMS / (1000 * 60 * 60 * 24));

    console.log("TIME DIFF:", { days, hours, minutes });
    setTimeDiff({ days, hours, minutes });
  };

  return (
    <Box mt="32px">
      <HStack w="100%" justifyContent="center" spacing="16px" flexWrap="wrap">
        <Heading fontSize="44px" whiteSpace="nowrap">
          {timeDiff.days ? timeDiff.days : "00"} Days
        </Heading>
        <Heading fontSize="44px" whiteSpace="nowrap">
          {timeDiff.hours ? timeDiff.hours : "00"} Hours
        </Heading>
        <Heading fontSize="44px" whiteSpace="nowrap">
          {timeDiff.minutes ? timeDiff.minutes : "00"} Minutes
        </Heading>
      </HStack>
    </Box>
  );
};

export default CountdownClock;
