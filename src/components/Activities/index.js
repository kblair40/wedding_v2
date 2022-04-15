import React from "react";
import { Flex } from "@chakra-ui/react";

import ActivityList from "./ActivityList";
import ActivityItem from "./ActivityItem";

const Activities = () => {
  return (
    <Flex
      w="100%"
      // border="1px solid blue"
      justifyContent="space-between"
      maxW={{
        md: "720px",
        lg: "900px",
      }}
      //
    >
      <ActivityList label="coffee/tea">
        <ActivityItem name="Coffee Shop Name" />
        <ActivityItem name="Donut Shop Name" />
        <ActivityItem name="Cafe Winter Park" />
      </ActivityList>
      <ActivityList label="coffee/tea">
        <ActivityItem name="Coffee Shop Name" />
        <ActivityItem name="Donut Shop Name" />
        <ActivityItem name="Cafe Winter Park" />
      </ActivityList>
      <ActivityList label="coffee/tea">
        <ActivityItem name="Coffee Shop Name" />
        <ActivityItem name="Donut Shop Name" />
        <ActivityItem name="Cafe Winter Park" />
      </ActivityList>
    </Flex>
  );
};

export default Activities;
