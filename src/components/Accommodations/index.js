import React from "react";
import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";

import OverlayCard from "components/containers/OverlayCard";
import alfond from "assets/images/alfond1.jpeg";
import hgi_lobby from "assets/images/hgi_lobby.jpeg";

const Accommodations = () => {
  return (
    <Flex w="100%" direction="column" px="16px" minW="350px">
      <Heading textAlign="center" fontSize="4xl" fontWeight="600">
        accommodations
      </Heading>

      <Box d="inline" mt="16px">
        <Text d="inline">
          The two closest hotels to the venue are The Hilton Garden Inn and the
          Alfond Inn. We recommend also looking for&nbsp;
        </Text>
        <Button d="inline" variant="link" color="#000">
          <Link
            href="https://www.airbnb.com/s/Winter-Park--Florida--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&query=Winter%20Park%2C%20Florida%2C%20United%20States&place_id=ChIJxSmm2xtw54gRIO71LJWCP8Y&date_picker_type=calendar&checkin=2023-01-20&checkout=2023-01-22&source=structured_search_input_header&search_type=autocomplete_click"
            isExternal
          >
            airbnb’s
          </Link>
        </Button>
        <Text d="inline">
          &nbsp;in the Winter Park area if a hotel isn’t the right fit for you!
        </Text>
      </Box>
      <Flex mt="16px" justify="space-between" mb="32px">
        <OverlayCard
          imageURL={alfond}
          label="The Alfond Inn"
          to="https://thealfondinn.com/"
        />
        <OverlayCard
          ml="16px"
          imageURL={hgi_lobby}
          label="Hilton Garden Inn"
          to="https://www.hilton.com/en/hotels/mcowpgi-hilton-garden-inn-winter-park/"
        />
      </Flex>
    </Flex>
  );
};

export default Accommodations;
