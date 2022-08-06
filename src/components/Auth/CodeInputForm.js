import React, { useState } from "react";
import {
  PinInput,
  PinInputField,
  HStack,
  Button,
  Text,
  Heading,
  Box,
  Spinner,
} from "@chakra-ui/react";

import useUserContext from "hooks/useUserContext";

const CodeInputForm = ({ getGuest, handleFinishCodeInput }) => {
  const [codeInputComplete, setCodeInputComplete] = useState(false);
  const { handleAuthenticated } = useUserContext();

  const validateCode = async (code) => {
    setCodeInputComplete(true);
    try {
      let guest = await getGuest(parseInt(code));
      // console.log("\n\nGUEST:", guest, "\n\n");

      // pass user object back to context for use elsewhere
      // handleAuthenticated(guest);

      handleFinishCodeInput(guest);

      // onClose(guest);
    } catch (err) {
      // console.log("FAILED TO FETCH GUEST:", err);
    }
    // console.log("\n\nFOUND GUEST:", guest);
  };

  return (
    <Box p="24px">
      <Heading mb="4px" fontSize="3xl" fontWeight="400">
        Welcome!
      </Heading>
      <Text mb="16px" fontWeight="600">
        Please enter the 4-digit code on your invite
      </Text>
      <HStack justifyContent="center">
        {!codeInputComplete ? (
          <PinInput onComplete={validateCode}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        ) : (
          <Spinner />
        )}
      </HStack>
    </Box>
  );
};

export default CodeInputForm;
