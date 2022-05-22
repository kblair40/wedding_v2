import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Button,
} from "@chakra-ui/react";

const ConfirmDeleteModal = ({ onClose, isOpen, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
      <ModalOverlay />
      <ModalContent w="min-content">
        <ModalBody py="1rem">
          <Flex justifyContent="space-between">
            <Button onClick={onClose} mr="1rem">
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              bg="error.100"
              _hover={{ bg: "error.200" }}
              _active={{ bg: "error.300" }}
            >
              Confirm
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDeleteModal;
