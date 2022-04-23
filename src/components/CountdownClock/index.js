import React, { useState, useEffect } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

import ClockBody from "./ClockBody";
import "./index.css";

const WEDDING_DATE = "2023-01-21";

const CountdownClock = () => {
  const [showClock, setShowClock] = useState(true);
  const handleHideClock = () => {
    setShowClock(false);
  };

  const handleShowClock = () => {
    setShowClock(true);
  };

  return (
    showClock && (
      <Box display={{ base: "none", sm: "block" }}>
        <ClockBody onHide={handleHideClock} onShow={handleShowClock} />
      </Box>
    )
  );
};

export default CountdownClock;
