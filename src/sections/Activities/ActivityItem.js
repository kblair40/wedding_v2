import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";

const ActivityItem = ({ activity: { name, url, priceLevel } }) => {
  return (
    <Box
      w="auto"
      my="4px"
      _hover={{
        ".activity-link": {
          // bg: "secondary.50",
          bg: "primary.50",
        },
      }}
    >
      <Link
        isExternal
        href={url}
        lineHeight="26px"
        color="neutral.black"
        _hover={{
          textDecoration: "none",
        }}
        className="activity-link"
        borderBottom="1px solid #333"
      >
        {name}

        {priceLevel > 0 && (
          <Text
            ml="6px"
            d="inline"
            fontSize="sm"
            color="text.tertiary"
            fontStyle="italic"
          >
            {"$".repeat(priceLevel)}
          </Text>
        )}
      </Link>
    </Box>
  );
};

export default ActivityItem;
