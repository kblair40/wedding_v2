import React from "react";
import {
  Flex,
  useBreakpointValue,
  Heading,
  Divider,
  Box,
} from "@chakra-ui/react";
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
    <Box
      sx={{
        ".masonry-grid": {
          display: "flex",
          marginLeft: `-${pl}` /* gutter size offset */,
          width: "auto",
          // border: "1px solid #333",
        },
        ".masonry-grid_column": {
          width: "100%",
          paddingLeft: pl,
          // border: "1px solid orange",
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
        {/* <Text
          mb="24px"
          fontWeight="400"
          alignSelf={{
            base: "center",
          }}
          whiteSpace="nowrap"
          fontSize={{ base: "21px", sm: "24px" }}
        >
          LOCAL (IN / NEAR WINTER PARK)
        </Text> */}
        <Masonry
          breakpointCols={colBreakpoints}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
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

          <ActivityList label="parks" activities={ACTIVITIES.parks} />
          <ActivityList label="drinks" activities={ACTIVITIES.drinks} />
          <ActivityList label="sweets" activities={ACTIVITIES.sweets} />

          {/*  */}
        </Masonry>
        {/*  */}
        {/* <Divider my="24px" borderColor="neutral.black" opacity={0.3} /> */}
        {/* <Text
          mb="24px"
          fontWeight="400"
          alignSelf={{ base: "center" }}
          // fontSize="2xl"
          fontSize={{ base: "21px", sm: "24px" }}
        >
          OFF THE BEATEN PATH
        </Text> */}
      </Flex>
    </Box>
  );
};

export default Activities;
