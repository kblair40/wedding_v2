import React, { useState, useEffect, useRef } from "react";
import {
  Input,
  Button,
  Text,
  HStack,
  Box,
  FormHelperText,
  FormControl,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal,
} from "@chakra-ui/react";

import SearchResults from "./SearchResults";
import api from "apimongo";

const textColors = {
  primary: "rgba(52, 65, 72, 1)",
  secondary: "rgba(52, 65, 72, .78)",
  tertiary: "rgba(52, 65, 72, .51)",
};

const GuestSearch = ({ getSearchResults, showHelp, onChange, searchInput }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [notFoundError, setNotFoundError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const inputRef = useRef();

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

    if (nameArray.length < 2) {
      setErrorMsg("First and last names are both required");
      return;
    } else if (nameArray.length > 2) {
      setErrorMsg("Please only enter your first and last name");
      return;
    }

    const fullname = nameArray.join(" ");
    handleSubmitSearch(fullname);
  };

  const handleSubmitSearch = async (full_name) => {
    setLoading(true);

    try {
      let guests = await api.get("/guest/byname", {
        params: { full_name },
      });

      const { mainGuest, family, so } = guests.data;

      getSearchResults(mainGuest, so, family); // pass back to parent (RSVP page);
    } catch (err) {
      console.warn("FAILED TO RETRIEVE GUEST");
      setNotFoundError(true);
    }

    setLoading(false);
  };

  const handleChange = async (e) => {
    onChange(e);
    if (errorMsg) setErrorMsg("");
    if (notFoundError) setNotFoundError(false);

    const { value } = e.target;
    if (value.length <= 2) {
      setSearchResults([]);
      return;
    }

    const response = await api.get("/search", {
      params: { name: e.target.value },
    });

    console.log("RESPONSE:", response.data);
    if (response.data) {
      setSearchResults(response.data);
    } else {
      setSearchResults([]);
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
          <Popover
            flip={false}
            isOpen={searchResults && Boolean(searchResults.length)}
            initialFocusRef={inputRef}
          >
            <PopoverTrigger>
              <Input
                ref={inputRef}
                pl=".5rem"
                variant="flushed"
                value={searchInput}
                onChange={handleChange}
                w="100%"
                placeholder="ex. Kevin Blair (not The Blair Family or Mr. Blair)"
                borderColor="text.tertiary"
                _hover={{ borderColor: "text.secondary" }}
                focusBorderColor={textColors.primary}
                _placeholder={{
                  color: textColors.secondary,
                  fontSize: { base: "13px", sm: "sm" },
                }}
              />
            </PopoverTrigger>

            <Portal>
              <PopoverContent p={0} border="1px solid black">
                <SearchResults searchResults={searchResults} />
              </PopoverContent>
            </Portal>
          </Popover>
          <Button
            onClick={validateInput}
            isLoading={loading}
            // variant="main_filled"
          >
            Find Me
          </Button>
        </HStack>

        <FormHelperText color="text.secondary" opacity="1">
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
    </form>
  );
};

export default GuestSearch;
