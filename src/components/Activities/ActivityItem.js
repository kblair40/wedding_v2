import React from "react";
import { Box, Link, Text, Flex } from "@chakra-ui/react";
import { Link as RRLink } from "react-router-dom";

const ActivityItem = ({ name, url }) => {
  return (
    <Box>
      {/* <Link as={RRLink}> */}
      <Text fontWeight="500" fontSize="sm">
        {name}
      </Text>
      {/* </Link> */}
    </Box>
  );
};

export default ActivityItem;
