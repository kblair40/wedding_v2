import React from "react";
import { Text, Button } from "@chakra-ui/react";

import { addGuest } from "api/api";
import PageContainer from "components/containers/PageContainer";

const ToDoToEat = () => {
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
    <PageContainer>
      <Text>Things to do</Text>
      <Button onClick={addNewGuest} size="sm">
        Add Guest
      </Button>
    </PageContainer>
  );
};

export default ToDoToEat;
