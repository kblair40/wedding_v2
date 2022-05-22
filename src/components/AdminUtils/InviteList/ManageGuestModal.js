import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

import { toTitleCase } from "utils/helpers";
import api from "apifast";
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
    console.log("\n\nFETCH GUEST DATA:", data);
  };

  if (!rowData || !isOpen) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex flexDirection="column">
            <Text fontSize="2xl">{toTitleCase(rowData["full_name"])}</Text>
            <Text>pk: {rowData["pk"]}</Text>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <PatchForm data={rowData} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ManageGuestModal;
