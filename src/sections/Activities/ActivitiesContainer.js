import React from "react";
import { Flex, useBreakpointValue, Text, Box } from "@chakra-ui/react";
import Masonry from "react-masonry-css";

import { ACTIVITIES } from "utils/constants";
import { fontSizes } from "utils/custom-theme";
import ActivityList from "./ActivityList";
import SectionLabel from "components/SectionLabel";

const colBreakpoints = {
  default: 3,
  500: 1,
  767: 2,
  1280: 3,
};

const ActivitiesContainer = () => {
  const pl = useBreakpointValue({
    base: "0",
    sm: "2.5rem",
    md: "3rem",
  });

  return (
    <Flex w="100%" flexDirection="column" alignItems="center">
      <SectionLabel label="activities" />

      <Text
        mb="24px"
        textAlign="center"
        fontSize={fontSizes.lgt}
        fontWeight="500"
        minW="300px"
      >
        Here are a few local spots we think you'll like.
      </Text>

      <Box
        sx={{
          ".masonry-grid": {
            display: "flex",
            marginLeft: `-${pl}` /* gutter size offset */,
            width: "auto",
          },
          ".masonry-grid_column": {
            width: "100%",
            paddingLeft: pl,
          },
          ".masonry-grid_column > div": {
            marginBottom: "2rem",
          },
        }}
      >
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
          <Masonry
            breakpointCols={colBreakpoints}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            <ActivityList
              label="coffee/tea"
              activities={ACTIVITIES.coffeeTea}
            />

            <ActivityList
              label="activities"
              activities={ACTIVITIES.activities}
            />
            <ActivityList
              label="breakfast/brunch"
              activities={ACTIVITIES.breakfast}
            />

            <ActivityList
              label="lunch/dinner"
              activities={ACTIVITIES.lunchDinner}
            />

            <ActivityList
              label="wine bars nearby"
              activities={ACTIVITIES.wineBars}
            />
            <ActivityList
              label="cocktail bars in orlando"
              activities={ACTIVITIES.cocktailBars}
            />

            <ActivityList label="sweets" activities={ACTIVITIES.sweets} />
          </Masonry>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ActivitiesContainer;
