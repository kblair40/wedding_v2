import React from "react";

import { Box, Flex, Text, Heading, VStack } from "@chakra-ui/react";

const Invitation = () => {
  return (
    <Box mt="24px" borderRadius="8px" border="1px solid #eee" p="16px">
      <VStack spacing="4px">
        <Text fontSize="lg" fontWeight="500">
          You are cordially invited to our wedding on
        </Text>
        <Heading fontSize="lg" fontWeight="400">
          January 21st, 2023
        </Heading>
      </VStack>
    </Box>
  );
};

export default Invitation;
