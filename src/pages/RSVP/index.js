import React, { useEffect, useState } from "react";
import { Box, Heading, Center } from "@chakra-ui/react";

import RSVPForm from "components/RSVPForm";
import GuestSearch from "./GuestSearch";
import { getGuestByName } from "api/api";

const RSVP = () => {
  const [guest, setGuest] = useState();

  const handleSubmitSearch = async (fn, ln) => {
    try {
      let guest = await getGuestByName(fn, ln);
      console.log("GUEST:", guest);
    } catch (err) {
      console.log("FAILED TO RETRIEVE GUEST");
    }
  };

  return (
    <Box
      px="24px"
      // border="1px solid #ccc"
      pt="16px"
      //
    >
      {/* <Heading>RSVP PAGE</Heading> */}
      {/* <Center> */}
      <GuestSearch handleSubmitSearch={handleSubmitSearch} />
      {/* </Center> */}
      {/* <RSVPForm /> */}
    </Box>
  );
};

export default RSVP;
