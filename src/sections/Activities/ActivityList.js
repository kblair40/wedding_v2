import React from "react";
import { Heading, Flex } from "@chakra-ui/react";

import ActivityItem from "./ActivityItem";

const ActivityList = ({ label, activities }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      // border="1px solid green"
    >
      <Heading fontWeight="700" mb="16px">
        {label}
      </Heading>

      {activities.map((act, i) => {
        return <ActivityItem activity={act} key={i} />;
      })}
    </Flex>
  );
};

export default ActivityList;
