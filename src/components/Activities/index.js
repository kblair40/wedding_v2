import React from "react";
import { Box } from "@chakra-ui/react";

import ActivityList from "./ActivityList";
import ActivityItem from "./ActivityItem";

const Activities = () => {
  return (
    <Box>
      <ActivityList label="coffee/tea">
        <ActivityItem name="Place To Go" />
      </ActivityList>
    </Box>
  );
};

export default Activities;
