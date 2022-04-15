import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

import ActivityItem from "./ActivityItem";

const ActivityList = ({ label, activities }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      // w="min-content"
      // border="1px solid black"
      // p="12px 8px"
    >
      <Heading
        fontWeight="700"
        mb="16px"
        fontSize="3xl"
        //
      >
        {label}
      </Heading>
      {activities.map((act) => {
        return <ActivityItem activity={act} />;
      })}
      {/* <ActivityItem name="Coffee Shop Name" />
      <ActivityItem name="Coffee Shop Name" />
      <ActivityItem name="Coffee Shop Name" /> */}
      {/* {children} */}
    </Flex>
  );
};

export default ActivityList;
