import React from "react";
import { Box, Link } from "@chakra-ui/react";

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
        {`${name}  ${"$".repeat(priceLevel)}`}
      </Link>
    </Box>
  );
};

export default ActivityItem;
