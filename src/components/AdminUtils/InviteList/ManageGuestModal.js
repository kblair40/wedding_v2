import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalBody,
  Flex,
} from "@chakra-ui/react";

import PatchForm from "./PatchForm";

const ManageGuestModal = ({ isOpen, onClose, selectedRow }) => {
  const [rowData, setRowData] = useState();

  useEffect(() => {
    if (selectedRow) {
      setRowData(selectedRow);
    }

    fetchGuest(selectedRow);
  }, [selectedRow]);

  const fetchGuest = (data) => {
    // console.log("\n\nFETCH GUEST DATA:", data);
  };

  if (!rowData || !isOpen) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex flexDirection="column"></Flex>
        </ModalHeader>
        <ModalBody>
          <PatchForm data={rowData} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ManageGuestModal;
