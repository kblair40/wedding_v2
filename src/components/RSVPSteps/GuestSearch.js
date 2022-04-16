import React, { useState } from "react";
import { Input, Button, Text, HStack } from "@chakra-ui/react";

import { getGuestByName, getRelatedGuests } from "api/api";
import { toTitleCase } from "utils/helpers";

const GuestSearch = ({ getSearchResults }) => {
  const [inputVal, setInputVal] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [notFoundError, setNotFoundError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [guest, setGuest] = useState();
  // const [relatedGuests, setRelatedGuests] = useState();

  const validateInput = async (e) => {
    e.preventDefault();

    let nameArray = inputVal.trim().split(" ");
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

  const handleSubmitSearch = async (fn, ln) => {
    setLoading(true);
    let guest;
    try {
      guest = await getGuestByName(fn, ln);
      console.log("GUEST:", guest);
    } catch (err) {
      console.log("FAILED TO RETRIEVE GUEST");
    }

    if (!guest) {
      setNotFoundError(true);
      setLoading(false);
      return;
    } else {
      // setGuest(guest);
    }

    if (guest.significant_other || guest.other_family) {
      let relatedGuests = [];
      if (guest.significant_other) relatedGuests.push(guest.significant_other);
      if (guest.other_family) {
        let family = guest.other_family.split(", ");
        console.log("\nFAMILY:", family);
        relatedGuests = [...relatedGuests, ...family];
        console.log("\nALL RELATED GUESTS:", relatedGuests);
      }

      if (relatedGuests.length) {
        let response = await getRelatedGuests(relatedGuests);
        console.log("\nGET RELATED GUESTS RESPONSE:", response);
        if (response) {
          // setRelatedGuests(response);
          getSearchResults(guest, response); // pass back to parent (RSVP page);
        }
      }
    } else {
      console.log("no other family / significant other");
      getSearchResults(guest);
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
    if (errorMsg) {
      setErrorMsg("");
    }
    if (notFoundError) {
      setNotFoundError(false);
    }
  };

  return (
    <form onSubmit={validateInput} style={{ width: "100%" }}>
      <Text
        fontSize="15px"
        fontWeight="300"
        //
      >
        Please enter the first and last name of one member of your party below.
      </Text>
      <Text
        mt="4px"
        fontSize="15px"
        fontWeight="300"
        //
      >
        If you're responding for you and a guest (or your family), you'll be
        able to RSVP for your entire group on the next page.
      </Text>
      <HStack w="100%" mt="32px" spacing={{ base: "8px", sm: "16px" }}>
        <Input
          pl="4px"
          variant="flushed"
          onChange={handleChange}
          w="100%"
          placeholder="ex. Kevin Blair (not The Blair Family or Mr. Blair)"
          borderColor="text.tertiary"
          focusBorderColor="text.primary"
          _placeholder={{ color: "text.muted" }}
        />
        <Button
          color="neutral.black"
          fontWeight="500"
          onClick={validateInput}
          isLoading={loading}
        >
          Find Me
        </Button>
      </HStack>
    </form>
  );
};

export default GuestSearch;
