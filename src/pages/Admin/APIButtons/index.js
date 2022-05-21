import React from "react";
import { Button, HStack } from "@chakra-ui/react";

import api from "apifast";

const APIButtons = () => {
  const fetchGuests = async () => {
    const res = await api.get("/guest");
    console.log("RES:", res);
  };

  return (
    <HStack mt="8px">
      <Button size="sm" onClick={fetchGuests}>
        Get All Guests
      </Button>
      <Button size="sm">Add Guest</Button>
    </HStack>
  );
};

export default APIButtons;
