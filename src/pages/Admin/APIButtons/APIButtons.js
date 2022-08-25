import React, { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";

import api from "apimongo";

const APIButtons = ({ getAllGuests }) => {
  const [loading, setLoading] = useState(false);

  const fetchGuests = async () => {
    setLoading(true);
    try {
      const res = await api.get("/guest");
      getAllGuests(res.data);
    } catch (e) {
      console.error("FAILED FETCHING ALL GUESTS:", e);
    }

    setLoading(false);
  };

  return (
    <HStack mb="8px">
      <Button size="sm" onClick={fetchGuests} isLoading={loading}>
        Get All Guests
      </Button>
      <Button size="sm">Add Guest</Button>
    </HStack>
  );
};

export default APIButtons;
