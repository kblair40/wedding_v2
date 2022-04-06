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
      w="275px"
      borderRadius="4px"
      bg="neutral.white"
      overflow="hidden"
      pb="8px"
      shadow="md"
    >
      <Box w="100%">
        <AspectRatio ratio={5 / 3.5}>
          <Image src={hawaii} w="100%" />
        </AspectRatio>
      </Box>

      <Box h="90px" p="12px 8px 0" w="100%" textOverflow="hidden">
        <Text fontWeight="700" noOfLines={2}>
          Trip to Hawaii
        </Text>
        <Text fontWeight="700">$9,000</Text>
      </Box>
      <HStack w="100%" justifyContent="center" px="8px" mt="16px">
        <VStack w="100%">
          <Button w="100%" onClick={onClick}>
            Contribute
          </Button>

          <Text color="text.secondary" fontSize="sm">
            ($4,327 contributed)
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default RegistryItem;
