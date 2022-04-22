import React from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

import ScheduleItem from "./ScheduleItem";

const ScheduleItems = () => {
  return (
    <Box>
      <ScheduleItem
        heading="rehearsal"
        time="12pm - 2pm"
        who="Wedding Party"
        locationName="Casa Feliz"
        dressCode="Casual"
        locationMapLink=""
      />
    </Box>
  );
};

export default ScheduleItems;
