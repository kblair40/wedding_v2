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
  Button,
} from "@chakra-ui/react";

import hawaii from "assets/images/hawaii.jpg";

const RegistryItem = ({ onClick }) => {
  return (
    <Box
      w="250px"
      borderRadius="4px"
      border="1px solid #cdcdcd"
      overflow="hidden"
      pb="8px"
    >
      <Image src={hawaii} w="100%" />
      {/* <HStack p="16px 8px 0" justifyContent="space-between"> */}
      <Box p="16px 8px 0">
        <Text fontWeight="700">Trip to Hawaii</Text>
        <Text fontWeight="700">$9,000</Text>
      </Box>
      {/* </HStack> */}
      {/* <HStack w="100%" justifyContent="flex-end" pr="8px">
        <Text color="text.secondary" fontStyle="italic">
          ($4,327) remaining
        </Text>
      </HStack> */}
      <HStack w="100%" justifyContent="center" px="8px" mt="16px">
        <VStack w="100%">
          <Button w="100%" onClick={onClick}>
            Contribute
          </Button>

          <Text color="text.secondary" fontStyle="italic" fontSize="sm">
            $4,327 contributed
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default RegistryItem;
