import React from "react";
import {
  Box,
  Alert,
  AlertTitle,
  AlertDescription,
  Icon,
  Text,
} from "@chakra-ui/react";

import { CheckCircleOutlineIcon } from "components/Icons";
import { colors } from "utils/custom-theme";

const AlreadyRepliedAlert = () => {
  return (
    <Alert
      maxW={{ base: "360px", sm: "500px", md: "600px" }}
      borderRadius="8px"
      w="auto"
      mt="-8px"
      mb="16px"
      bg={colors.primary["50"]}
      border="1px solid"
      borderColor={colors.primary["100"]}
    >
      <Icon as={CheckCircleOutlineIcon} boxSize="24px" />
      <Box ml="12px">
        <AlertTitle>Looks Like you've already replied, thank you!</AlertTitle>
        <AlertDescription>
          <Text lineHeight="120%" mt="2px">
            If needed, you can change your reply by searching for yourself
            again.
          </Text>
        </AlertDescription>
      </Box>
    </Alert>
  );
};

export default AlreadyRepliedAlert;
