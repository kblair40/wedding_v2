import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

import ActivityItem from "./ActivityItem";

const ActivityList = ({ label, activities }) => {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
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
    </Flex>
  );
};

export default ActivityList;