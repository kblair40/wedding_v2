import React from "react";
import {
  Box,
  Alert,
  AlertTitle,
  AlertDescription,
  Icon,
} from "@chakra-ui/react";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

const AlreadyRepliedAlert = () => {
  return (
    <Alert borderRadius="8px" w="auto" mb="24px">
      <Icon as={MdOutlineCheckCircleOutline} boxSize="24px" />
      <Box ml="12px">
        <AlertTitle>Looks Like you've already replied, thank you!</AlertTitle>
        <AlertDescription>
          You can change your reply by searching for yourself again if needed.
        </AlertDescription>
      </Box>
    </Alert>
  );
};

export default AlreadyRepliedAlert;
