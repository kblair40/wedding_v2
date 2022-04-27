import React from "react";
import { Flex } from "@chakra-ui/react";

import { scheduleItems } from "utils/constants";
import ScheduleItem from "./ScheduleItem";

const ScheduleItems = ({ day }) => {
  return (
    <Flex direction="column" alignItems="center">
      {scheduleItems[day].map((item, i) => (
        <ScheduleItem {...item} key={i} />
      ))}
    </Flex>
  );
};

export default ScheduleItems;
