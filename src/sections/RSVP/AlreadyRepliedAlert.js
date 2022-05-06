import React from "react";
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

const AlreadyRepliedAlert = () => {
  return (
    <Alert borderRadius="8px">
      {/* <AlertIcon as={<MdOutlineCheckCircleOutline />} /> */}
      <AlertTitle>Looks Like you've already replied, thank you!</AlertTitle>
    </Alert>
  );
};

export default AlreadyRepliedAlert;
