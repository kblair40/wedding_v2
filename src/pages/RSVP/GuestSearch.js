import React, { useState } from "react";
import { Input, Button, Text, VStack, HStack } from "@chakra-ui/react";

import { toTitleCase } from "utils/helpers";

const GuestSearch = ({ handleSubmitSearch }) => {
  const [inputVal, setInputVal] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let nameArray = inputVal.split(" ");
    if (nameArray.length < 2) {
      setErrorMsg("First and last names are both required");
      return;
    } else if (nameArray.length > 2) {
      setErrorMsg("Please only enter your first and last name");
      return;
    }

    let [fn, ln] = nameArray;
    fn = toTitleCase(fn);
    ln = toTitleCase(ln);

    console.log("INPUT NAMES:", { fn, ln });
    handleSubmitSearch(fn, ln);
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
    if (errorMsg) {
      setErrorMsg("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <VStack>
        <VStack spacing="4px">
          <Text>
            Please enter the first and last name of one member of your party
            below.
          </Text>
          <Text>
            If you're responding for you and a guest (or your family),
          </Text>
          <Text>
            you'll be able to RSVP for your entire group on the next page.
          </Text>
        </VStack>

        <HStack w="100%" maxW="480px" mt="16px">
          <Input
            onChange={handleChange}
            w="100%"
            placeholder="ex. Kevin Blair (not The Blair Family or Mr. Blair)"
          />
          <Button onClick={handleSubmit}>Find Me</Button>
        </HStack>
        {errorMsg && <Text color="red.300">{errorMsg}</Text>}
      </VStack>
    </form>
  );
};

export default GuestSearch;
