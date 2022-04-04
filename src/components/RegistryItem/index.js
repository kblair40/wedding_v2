import React, { useState, useEffect } from "react";
import {
  Box,
  HStack,
  VStack,
  Flex,
  Text,
  Heading,
  Image,
  AspectRatio,
} from "@chakra-ui/react";

import hawaii from "assets/images/hawaii.jpg";

const RegistryItem = ({ onClick }) => {
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      h="200px"
      w="225px"
      borderRadius="8px"
      border="1px solid #cdcdcd"
      overflow="hidden"
    >
      <Image src={hawaii} w="100%" />
      <HStack p="8px" justifyContent="space-between">
        <Text fontWeight="600">Trip to hawaii</Text>
        <Text fontWeight="700">$9,000</Text>
      </HStack>
    </Box>
  );
};

export default RegistryItem;
