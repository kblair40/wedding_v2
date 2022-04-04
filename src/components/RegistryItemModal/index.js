import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const RegistryItemModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Trip to Hawaii</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Stuff about the trip Nostrud eiusmod ad commodo cupidatat mollit nisi
          qui elit irure. Consequat nulla consequat ea qui sit ea laboris non
          veniam. Qui fugiat esse ex ex.
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost">Close</Button>
          <Button mr={3} onClick={onClose}>
            Buy
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RegistryItemModal;
