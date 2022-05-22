import React, { useEffect, useState } from "react";
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

import api from "apifast";

const ManageGuestModal = ({ isOpen, onClose, selectedRow }) => {
  const [rowData, setRowData] = useState();

  useEffect(() => {
    if (selectedRow) {
      setRowData(selectedRow);
    }

    fetchGuest(selectedRow);
  }, [selectedRow]);

  const fetchGuest = (data) => {
    console.log("\n\nFETCH GUEST DATA:", data);
  };

  if (!rowData) {
    return null;
  }

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
