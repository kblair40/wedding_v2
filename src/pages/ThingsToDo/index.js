import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

import { addGuest } from "api/api";

// {
//   firstName,
//   lastName,
//   email,
//   phoneNumber,
//   side,
//   entree = "",
// }

const ThingsToDo = () => {
  const addNewGuest = () => {
    addGuest({
      firstName: "fakefn2",
      lastName: "fakeln2",
      email: "email1@email.com",
      phoneNumber: "123.456.4321",
      side: "groom",
      entree: "beef",
    });
  };
  return (
    <Box>
      <Text>Things to do</Text>
      <Button onClick={addNewGuest} size="sm">
        Add Guest
      </Button>
    </Box>
  );
};

export default ThingsToDo;
