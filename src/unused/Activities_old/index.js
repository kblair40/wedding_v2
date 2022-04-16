import React from "react";
import { Flex, Grid, GridItem, Text, Heading, Divider } from "@chakra-ui/react";

import { ACTIVITIES } from "utils/constants";
import ActivityList from "./ActivityList";

const Activities = () => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      alignItems={{ base: "center", sm: "space-between" }}
      justifyContent="center"
      maxW={{
        md: "720px",
        lg: "900px",
      }}
    >
      <Text
        mb="24px"
        fontWeight="400"
        alignSelf={{
          base: "center",
        }}
        fontSize="2xl"
      >
        LOCAL (IN / NEAR WINTER PARK)
      </Text>
      <Grid
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
        <GridItem>
          <ActivityList label="drinks" activities={ACTIVITIES.drinks} />
        </GridItem>
        <GridItem>
          <ActivityList label="sweets" activities={ACTIVITIES.sweets} />
        </GridItem>
      </Grid>
      <Divider my="24px" borderColor="neutral.black" opacity={0.3} />
      <Text
        mb="24px"
        fontWeight="400"
        alignSelf={{ base: "center" }}
        fontSize="2xl"
      >
        OFF THE BEATEN PATH
      </Text>
    </Flex>
  );
};

export default Activities;
