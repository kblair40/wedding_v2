import React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

import { ACTIVITIES } from "utils/constants";
import ActivityList from "./ActivityList";

const Activities = () => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      maxW={{
        md: "720px",
        lg: "900px",
      }}
    >
      <Grid
        // border="1px solid red"
        columnGap={{ base: "8px", sm: "24px", md: "40px" }}
        rowGap="16px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        <GridItem>
          <ActivityList label="coffee/tea" activities={ACTIVITIES.coffeeTea} />
        </GridItem>

        <GridItem>
          <ActivityList
            label="breakfast/brunch"
            activities={ACTIVITIES.breakfast}
          />
        </GridItem>

        <GridItem>
          <ActivityList
            label="lunch/dinner"
            activities={ACTIVITIES.lunchDinner}
          />
        </GridItem>

        <GridItem>
          <ActivityList label="parks" activities={ACTIVITIES.parks} />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Activities;
