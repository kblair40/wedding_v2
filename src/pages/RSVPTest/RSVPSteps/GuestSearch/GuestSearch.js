import React, { useState, useRef } from "react";
import {
  Input,
  Text,
  HStack,
  Box,
  FormControl,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
} from "@chakra-ui/react";

import SearchResults from "./SearchResults";
import api from "apimongo";

const textColors = {
  primary: "rgba(52, 65, 72, 1)",
  secondary: "rgba(52, 65, 72, .78)",
  tertiary: "rgba(52, 65, 72, .51)",
};

const GuestSearch = ({ selectedResult, onSelectResult }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [notFoundError, setNotFoundError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const inputRef = useRef();

  const handleChange = async (e) => {
    const { value } = e.target;
    setInputVal(value);

    if (errorMsg) setErrorMsg("");
    if (notFoundError) setNotFoundError(false);

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

  const handleSelectResult = (_id) => {
    const result = searchResults.find((res) => res._id === _id);
    console.log("SELECTED RESULT:", result);
    onSelectResult(result);
    setInputVal("");
    setSearchResults([]);
  };

  return (
    <Box
      style={{
        width: "100%",
      }}
    >
      <FormControl>
        <Text textAlign="center" fontSize="md" fontWeight="400">
          Please enter the first and last name of one member of your party
          below.
        </Text>
        <Text
          color="#344148"
          textAlign="center"
          mt="8px"
          fontSize="md"
          fontWeight="400"
        >
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
            matchWidth={true}
            flip={false}
            isOpen={
              searchResults && Boolean(searchResults.length) && !selectedResult
            }
            initialFocusRef={inputRef}
          >
            <PopoverTrigger>
              <Input
                size="lg"
                ref={inputRef}
                bg="white"
                pl=".5rem"
                value={inputVal}
                onChange={handleChange}
                w="100%"
                transition="border-color 0.3s"
                placeholder="Write your name..."
                borderColor="gray.200"
                _hover={{ borderColor: "gray.400" }}
                focusBorderColor={"gray.500"}
                _placeholder={{
                  color: textColors.secondary,
                  fontSize: { base: "13px", sm: "sm" },
                }}
              />
            </PopoverTrigger>

            <Portal>
              <PopoverContent p={0} border="1px solid black">
                <SearchResults
                  searchResults={searchResults}
                  selectResult={handleSelectResult}
                />
              </PopoverContent>
            </Portal>
          </Popover>
        </HStack>

        {/* <HStack alignItems="center" spacing="8px" mt="8px">
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
        </HStack> */}
      </FormControl>
    </Box>
  );
};

export default GuestSearch;
