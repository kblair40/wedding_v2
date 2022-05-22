import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Button,
} from "@chakra-ui/react";

const ConfirmDeleteModal = ({ onClose, isOpen, onConfirm, deleting }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
      <ModalOverlay />
      <ModalContent w="min-content">
        <ModalBody py="1rem">
          <Flex justifyContent="space-between">
            <Button onClick={onClose} mr="1rem">
              Cancel
            </Button>
            <Button isLoading={deleting} onClick={onConfirm} variant="danger">
              Confirm
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDeleteModal;
