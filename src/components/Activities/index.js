import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { ACTIVITIES } from "utils/constants";
import ActivityList from "./ActivityList";
import ActivityItem from "./ActivityItem";

const Activities = () => {
  return (
    <React.Fragment>
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
        <ActivityList label="coffee/tea" activities={ACTIVITIES.coffeeTea} />
        <ActivityList
          label="breakfast/brunch"
          activities={ACTIVITIES.breakfast}
        />
        <ActivityList
          label="lunch/dinner"
          activities={ACTIVITIES.lunchDinner}
        />
      </Flex>
    </React.Fragment>
  );
};

export default Activities;
