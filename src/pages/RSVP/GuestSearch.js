import React, { useState, useEffect } from "react";
import { Input, Button, Text, VStack, HStack } from "@chakra-ui/react";

import { getGuestByName, getRelatedGuests } from "api/api";
import { toTitleCase } from "utils/helpers";

const GuestSearch = ({ getSearchResults }) => {
  const [inputVal, setInputVal] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [notFoundError, setNotFoundError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [guest, setGuest] = useState();
  const [relatedGuests, setRelatedGuests] = useState();

  // useEffect(() => {
  //   setNotFoundError(notFound);
  // }, [notFound]);

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
      setGuest(guest);
    }

    if (guest.significant_other || guest.other_family) {
      let relatedGuests = [];
      if (guest.significant_other) relatedGuests.push(guest.significant_other);
      if (guest.other_family) {
        let family = guest.other_family.split(", ");
        console.log("\nFAMILY:", family);
        relatedGuests = [...relatedGuests, ...family];
        console.log("\nALL RELATED GUESTS:", relatedGuests);
        if (relatedGuests.length) {
          let response = await getRelatedGuests(relatedGuests);
          console.log("\nGET RELATED GUESTS RESPONSE:", response);
          if (response) {
            setRelatedGuests(response);
            getSearchResults(guest, response); // pass back to parent (RSVP page);
          }
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
      <VStack
      // border="1px solid red"
      >
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
          <Button onClick={validateInput} isLoading={loading}>
            Find Me
          </Button>
        </HStack>
        {errorMsg && <Text color="red.400">{errorMsg}</Text>}
        {notFoundError && (
          <Text color="red.400">
            Sorry, but we were not able to find a guest with the provided name.
          </Text>
        )}
      </VStack>
    </form>
  );
};

export default GuestSearch;
