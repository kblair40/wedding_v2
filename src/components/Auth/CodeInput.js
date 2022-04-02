import React from "react";
import {
  PinInput,
  PinInputField,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import useUserContext from "hooks/useUserContext";

const CodeInput = ({ getGuest, isOpen, onClose }) => {
  const { handleAuthenticated } = useUserContext();

  const validateCode = async (code) => {
    try {
      let guest = await getGuest(parseInt(code));
      // console.log("\n\nGUEST:", guest, "\n\n");

      // pass user object back to context for use elsewhere
      handleAuthenticated(guest);

      onClose(guest);
    } catch (err) {
      console.log("FAILED TO FETCH GUEST:", err);
    }
    // console.log("\n\nFOUND GUEST:", guest);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Welcome!</ModalHeader>
        <ModalBody>
          <HStack justifyContent="center">
            <PinInput onComplete={validateCode}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CodeInput;
