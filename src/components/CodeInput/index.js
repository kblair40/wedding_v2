import React from "react";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";

const CodeInput = () => {
  const validateCode = (code) => {
    console.log("CODE:", code);
  };
  return (
    <HStack>
      <PinInput onComplete={validateCode}>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
};

export default CodeInput;
