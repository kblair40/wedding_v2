import React from "react";
import { Flex, useBreakpointValue, Text, Divider, Box } from "@chakra-ui/react";
import Masonry from "react-masonry-css";

import { ACTIVITIES } from "utils/constants";
import ActivityList from "./ActivityList";

const colBreakpoints = {
  default: 3,
  500: 1,
  767: 2,
  1280: 3,
};

const Activities = () => {
  const pl = useBreakpointValue({
    base: "0",
    sm: "2.5rem",
    md: "3rem",
  });

  return (
    <Flex
      className="fade-in-immediate"
      alignItems="center"
      direction="column"
      w="100%"
      pt="24px"
    >
      <Text
        fontSize={{ base: "3xl", sm: "48px" }}
        textAlign="center"
        fontWeight="500"
        w="100%"
        mt="32px"
        letterSpacing="2px"
      >
        ACTIVITIES
      </Text>

      <Box h="3px" w="50px" bg="neutral.800" />

      <Text
        my="24px"
        textAlign="center"
        fontSize="lg"
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
            // backgroundClip: "padding-box",
          },
          ".masonry-grid_column > div": {
            // background: "gold.main",
            marginBottom: "2rem",
          },
        }}
      >
        <Flex
          // border="1px solid black"
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
              label="breakfast/brunch"
              activities={ACTIVITIES.breakfast}
            />

            <ActivityList
              label="lunch/dinner"
              activities={ACTIVITIES.lunchDinner}
            />

            <ActivityList label="parks" activities={ACTIVITIES.parks} />
            <ActivityList label="drinks" activities={ACTIVITIES.drinks} />
            <ActivityList label="sweets" activities={ACTIVITIES.sweets} />
          </Masonry>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Activities;
