import React from "react";
import {
  Box,
  Modal,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";

const ManageGuestModal = ({ isOpen, onClose, selectedRow }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Guest name</ModalHeader> */}
        <ModalHeader>{selectedRow && selectedRow[0]}</ModalHeader>
        <ModalBody>
          {/* <Text>{selectedRow && selectedRow[0]}</Text> */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ManageGuestModal;
