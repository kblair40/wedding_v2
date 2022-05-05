import React, { useState } from "react";
import {
  Input,
  Button,
  Text,
  HStack,
  Box,
  FormHelperText,
  FormControl,
} from "@chakra-ui/react";

import { getGuestByName, getRelatedGuests } from "api/api";
import { toTitleCase } from "utils/helpers";

const GuestSearch = ({ getSearchResults, showHelp, onChange, searchInput }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [notFoundError, setNotFoundError] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateInput = async (e) => {
    e.preventDefault();

    let nameArray = searchInput.trim().split(" ");
    if (nameArray.length < 2) {
      // console.log("error1");
      setErrorMsg("First and last names are both required");
      return;
    } else if (nameArray.length > 2) {
      setErrorMsg("Please only enter your first and last name");
      // console.log("error2");
      return;
    }

    let [fn, ln] = nameArray;
    fn = toTitleCase(fn);
    ln = toTitleCase(ln);

    // console.log("INPUT NAMES:", { fn, ln });
    handleSubmitSearch(fn, ln);
  };

  const handleSubmitSearch = async (fn, ln) => {
    // console.log("Submitted:", { first_name: fn, last_name: ln });
    setLoading(true);
    let guest;
    try {
      guest = await getGuestByName(fn, ln);
      // console.log("GUEST:", guest);
    } catch (err) {
      console.warn("FAILED TO RETRIEVE GUEST");
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
        // console.log("\nFAMILY:", family);
        relatedGuests = [...relatedGuests, ...family];
        // console.log("\nALL RELATED GUESTS:", relatedGuests);
      }

      if (relatedGuests.length) {
        let response = await getRelatedGuests(relatedGuests);
        // console.log("\nGET RELATED GUESTS RESPONSE:", response);
        if (response) {
          getSearchResults(guest, response); // pass back to parent (RSVP page);
        }
      }
    } else {
      // console.log("no other family / significant other");
      getSearchResults(guest);
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    onChange(e);
    if (errorMsg) {
      setErrorMsg("");
    }

    if (notFoundError) {
      setNotFoundError(false);
    }
  };

  return (
    <form
      onSubmit={validateInput}
      style={{
        width: "100%",
      }}
    >
      <FormControl>
        <Text fontSize="md" fontWeight="400">
          Please enter the first and last name of one member of your party
          below.
        </Text>
        <Text mt="8px" fontSize="md" fontWeight="400">
          If you're responding for you and a guest (or your family), you'll be
          able to RSVP for your entire group on the next page.
        </Text>

        <HStack w="100%" mt="24px" spacing={{ base: "16px", sm: "32px" }}>
          <Input
            pl=".5rem"
            variant="flushed"
            value={searchInput}
            onChange={handleChange}
            w="100%"
            placeholder="ex. Kevin Blair (not The Blair Family or Mr. Blair)"
            borderColor="text.tertiary"
            focusBorderColor="text.primary"
            _placeholder={{
              color: "text.secondary",
              fontStyle: "italic",
              fontSize: { base: "13px", sm: "md" },
            }}
          />
          <Button onClick={validateInput} isLoading={loading}>
            Find Me
          </Button>
        </HStack>

        <FormHelperText
        // mt="4px"
        // border="1px solid #ccc"
        //
        // pl="4px"
        >
          <strong>Tip</strong>: &nbsp;Try using short and long versions of your
          first name. &nbsp;Ex. If your first name is James, try using Jim
        </FormHelperText>

        <HStack alignItems="flex-end" spacing="16px" mt="2px">
          <Text color="red.500" fontSize="sm" mt="4px">
            {errorMsg ? `${errorMsg}` : ""}
          </Text>
          <Button
            variant="link"
            size="sm"
            color="text.primary"
            fontWeight="500"
            display={errorMsg ? "block" : "none"}
          >
            Need help?
          </Button>
        </HStack>
      </FormControl>

      {notFoundError && (
        <Box d="inline">
          <Text mt="12px" mr="4px" display="inline" fontSize="sm">
            Sorry, we couldn't find anyone with the name you entered. If you're
            sure you entered your first and last name correctly, please RSVP by
            filling out our form
          </Text>
          <Button
            borderRadius={0}
            variant="link"
            color="text.primary"
            onClick={showHelp}
            display="inline"
            fontWeight="500"
            borderBottom="1px solid #2d2d2d"
            _hover={{ textDecoration: "none" }}
          >
            HERE
          </Button>
        </Box>
      )}

      {/* <Text mt="8px" fontSize="sm" fontWeight="500" color="text.secondary">
        *Tip - Try using short and long versions of your first name. &nbsp;Ex.
        If your first name is James, try using Jim
      </Text> */}
    </form>
  );
};

export default GuestSearch;
