import React, { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";

import api from "apifast";

const APIButtons = ({ getAllGuests }) => {
  const [loading, setLoading] = useState(false);

  const fetchGuests = async () => {
    setLoading(true);
    const res = await api.get("/guest");
    console.log("RES:", res);
    setLoading(false);
    getAllGuests(res.data);
  };

  return (
    <HStack mt="8px">
      <Button size="sm" onClick={fetchGuests} isLoading={loading}>
        Get All Guests
      </Button>
      <Button size="sm">Add Guest</Button>
    </HStack>
  );
};

export default APIButtons;
