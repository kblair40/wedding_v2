import React from "react";
import {
  // PopoverContent,
  PopoverBody,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

const SearchResults = ({ searchResults }) => {
  return (
    <PopoverBody>
      {searchResults && searchResults.length
        ? searchResults.map((result, i) => {
            console.log("result:", result);
            return <Result key={i} result={result} />;
          })
        : null}
    </PopoverBody>
  );
};

export default SearchResults;

const Result = ({ result }) => {
  const { invite_label, replied, invited_names } = result;

  // const allInvitees = invited_names
  //   .split(', ')
  //   .map(inv => )

  return (
    <Box
      _hover={{ background: "#eee" }}
      transition="background 0.2s"
      cursor="pointer"
      w="100%"
      py="4px"
    >
      <Text textTransform="capitalize">{invite_label}</Text>
      <Text textTransform="capitalize">{invited_names}</Text>
    </Box>
  );
};
