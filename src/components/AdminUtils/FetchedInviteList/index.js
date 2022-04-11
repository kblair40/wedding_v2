import React, { useState, useEffect } from "react";
import { Box, Icon, Text, IconButton, Button, Heading } from "@chakra-ui/react";

import { getAllInvitees } from "api/api";

const FetchedInviteList = () => {
  const [invitees, setInvitees] = useState();

  useEffect(() => {
    const fetchGuests = async () => {
      let allInvitees = await getAllInvitees();
      console.log("ALL INVITEES:", allInvitees);
    };
    fetchGuests();
  });

  return (
    <Box>
      <Text>FETCHED INVITE LIST</Text>
    </Box>
  );
};

export default FetchedInviteList;
