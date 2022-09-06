import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";

import { colors } from "utils/custom-theme";

const ActivityItem = ({ activity: { name, url, priceLevel } }) => {
  return (
    <Box
      w="auto"
      my="4px"
      fontFamily="Cabin"
      _hover={{
        ".activity-link": {
          bg: colors.primary["50"],
        },
      }}
    >
      <Link
        isExternal
        href={url}
        lineHeight="26px"
        // color="neutral.black"
        color={colors.neutral.black}
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
            // color="text.tertiary"
            color={colors.text.tertiary}
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
