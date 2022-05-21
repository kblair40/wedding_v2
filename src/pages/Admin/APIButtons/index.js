import React from "react";
import { Button, Box, Flex } from "@chakra-ui/react";

import api from "apifast";

const APIButtons = () => {
  const fetchGuests = async () => {
    const res = await api.get("/guest");
    console.log("RES:", res);
  };
  return (
    <Flex>
      <Button size="sm" onClick={fetchGuests}>
        Get All Guests
      </Button>
      <Button size="sm">Add Guest</Button>
    </Flex>
  );
};

export default APIButtons;
