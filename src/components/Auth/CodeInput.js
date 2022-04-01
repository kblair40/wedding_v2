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
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const CodeInput = ({ getGuest }) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const validateCode = async (code) => {
    console.log("CODE:", code);
    let guest = await getGuest(parseInt(code));
    console.log("\n\nFOUND GUEST:", guest);
    onClose();
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
