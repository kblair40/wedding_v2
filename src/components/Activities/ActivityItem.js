import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";

const ActivityItem = ({ activity: { name, url, priceLevel } }) => {
  return (
    <Box borderBottom="1px solid #333" my="4px" _hover={{ bg: "neutral.100" }}>
      <Link
        isExternal
        href={url}
        lineHeight="26px"
        color="neutral.black"
        _hover={{
          textDecoration: "none",
        }}
      >
        {name}
        <Text
          ml="6px"
          d="inline"
          fontSize="sm"
          color="text.tertiary"
          fontStyle="italic"
        >
          {"$".repeat(priceLevel)}
        </Text>
      </Link>
    </Box>
  );
};

export default ActivityItem;
