import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Checkbox,
  Button,
} from "@chakra-ui/react";

const SelectGuestsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select guests to reply for</ModalHeader>
        <ModalCloseButton />
        <ModalBody>BODY</ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="ghost">Reset</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SelectGuestsModal;
