import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Text,
  HStack,
  Box,
  FormHelperText,
  FormControl,
} from "@chakra-ui/react";

import api from "apifast";
import { toTitleCase, getGuestByKey } from "utils/helpers";

const GuestSearch = ({ getSearchResults, showHelp, onChange, searchInput }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [notFoundError, setNotFoundError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchInput === "") {
      setErrorMsg("");
      setNotFoundError(false);
    }
  }, [searchInput]);

  const handleClickShowHelp = () => {
    if (errorMsg) {
      setErrorMsg("");
    }
    if (notFoundError) {
      setNotFoundError(false);
    }

    showHelp();
  };

  const validateInput = async (e) => {
    // Called first when form is submitted.
    // If input is valid, forward the input to handleSubmit function
    e.preventDefault();

    let nameArray = searchInput
      .trim()
      .split(/\s+/)
      .map((name) => name.toLowerCase());
    console.log("NAME ARRAY:", nameArray);
    if (nameArray.length < 2) {
      // console.log("error1");
      setErrorMsg("First and last names are both required");
      return;
    } else if (nameArray.length > 2) {
      setErrorMsg("Please only enter your first and last name");
      // console.log("error2");
      return;
    }

    const fullname = nameArray.join(" ");
    console.log("RETURNING:", fullname);
    // console.log("INPUT NAMES:", { fn, ln });
    handleSubmitSearch(fullname);
  };

  const handleSubmitSearch = async (fullname) => {
    // console.log("Submitted:", { first_name: fn, last_name: ln });
    setLoading(true);

    let guests;
    try {
      guests = await api.get(`/guest/byname/${fullname}`);
      console.log("\n\n\nGUESTS FOUND:", guests.data, "\n\n\n");
      //  getSearchResults(guest, response); // pass back to parent (RSVP page);

      let mainGuest = getGuestByKey(guests.data, "main");
      console.log("MAIN GUEST:", mainGuest, "\n\n\n");

      for (let obj of guests.data) {
        console.log("KEY:", Object.keys(obj));
      }

      console.log();
    } catch (err) {
      console.warn("FAILED TO RETRIEVE GUEST");
    }

    if (!guests) {
      setNotFoundError(true);
      setLoading(false);
      return;
    } else {
      // setGuest(guest);
    }

    // if (guest.significant_other || guest.other_family) {
    // let relatedGuests = [];
    // if (guest.significant_other) relatedGuests.push(guest.significant_other);
    // if (guest.other_family) {
    //   let family = guest.other_family.split(", ");
    //   relatedGuests = [...relatedGuests, ...family];
    // }
    // if (relatedGuests.length) {
    //   let response = await getRelatedGuests(relatedGuests);
    //   // console.log("\nGET RELATED GUESTS RESPONSE:", response);
    //   if (response) {
    //     getSearchResults(guest, response); // pass back to parent (RSVP page);
    //   }
    // }
    // } else {
    // console.log("no other family / significant other");
    // getSearchResults(guest);
    // }

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
        <Text textAlign="center" fontSize="md" fontWeight="400">
          Please enter the first and last name of one member of your party
          below.
        </Text>
        <Text textAlign="center" mt="8px" fontSize="md" fontWeight="400">
          If you're responding for you and a guest (or your family), you'll be
          able to RSVP for your entire group on the next page.
        </Text>

        <HStack
          w="100%"
          mt="24px"
          spacing={{ base: "16px", sm: "32px" }}
          justifyContent="center"
        >
          <Input
            pl=".5rem"
            variant="flushed"
            value={searchInput}
            onChange={handleChange}
            w="100%"
            placeholder="ex. Kevin Blair (not The Blair Family or Mr. Blair)"
            borderColor="text.tertiary"
            _hover={{ borderColor: "text.secondary" }}
            focusBorderColor="text.primary"
            _placeholder={{
              color: "text.secondary",
              fontSize: { base: "13px", sm: "sm" },
            }}
          />
          <Button
            onClick={validateInput}
            isLoading={loading}
            variant="main_filled"
          >
            Find Me
          </Button>
        </HStack>

        <FormHelperText color="text.secondary" opacity=".85">
          <strong>Tip</strong>: &nbsp;Try using short and long versions of your
          first name. &nbsp;Ex. If your first name is James, try using Jim
        </FormHelperText>

        <HStack alignItems="center" spacing="8px" mt="8px">
          <Text color="error.700" fontSize="15px" lineHeight="100%">
            {errorMsg ? `${errorMsg}` : ""}
          </Text>
          <Button
            onClick={handleClickShowHelp}
            variant="link"
            size="sm"
            fontSize="15px"
            color="text.primary"
            fontWeight="600"
            display={errorMsg ? "block" : "none"}
          >
            Need help?
          </Button>
        </HStack>
      </FormControl>

      {notFoundError && (
        <Box d="inline-block" lineHeight="0px" mt="8px">
          <Text
            mr="4px"
            d="inline"
            fontSize="15px"
            color="error.700"
            lineHeight="22px"
          >
            Sorry, we couldn't find anyone with the name you entered. If you're
            sure you entered your first and last name correctly, please RSVP by
            filling out our form
          </Text>
          <Button
            borderRadius={0}
            variant="link"
            color="text.primary"
            onClick={handleClickShowHelp}
            d="inline"
            fontWeight="500"
            fontSize="15px"
            borderBottom="1px solid"
            borderColor="#2d2d2d"
            _hover={{
              textDecoration: "none",
              color: "#000",
              borderColor: "#000",
            }}
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
