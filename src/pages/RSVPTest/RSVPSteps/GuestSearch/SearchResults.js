import React from "react";
import { PopoverBody, Box, Flex, Text } from "@chakra-ui/react";

const textColors = {
  primary: "rgba(52, 65, 72, 1)",
  secondary: "rgba(52, 65, 72, .78)",
  tertiary: "rgba(52, 65, 72, .51)",
};

const SearchResults = ({ searchResults, selectResult }) => {
  return (
    <PopoverBody p={0}>
      {searchResults && searchResults.length
        ? searchResults.map((result, i) => {
            console.log("result:", result);
            return <Result key={i} result={result} onClick={selectResult} />;
          })
        : null}
    </PopoverBody>
  );
};

export default SearchResults;

const Result = ({ result, onClick }) => {
  const { invite_label, replied, invited_names, _id } = result;

  return (
    <Box
      onClick={() => onClick(_id)}
      _hover={{ background: "#eee" }}
      transition="background 0.2s"
      cursor="pointer"
      w="100%"
      py="6px"
      px="8px"
      borderBottom="0.1px solid #ccc"
    >
      <Text fontWeight="500" textTransform="capitalize">
        {invite_label}
      </Text>
      <Text
        textTransform="capitalize"
        fontSize="sm"
        lineHeight={1.1}
        fontStyle="italic"
        color={textColors.secondary}
      >
        {invited_names}
      </Text>
    </Box>
  );
};
