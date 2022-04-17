import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";

import CustomRSVPForm from "components/RSVPSteps/RSVPHelpModal/CustomRSVPForm";

const RSVPHelpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight="500">Sorry about that!</ModalHeader>
        <CustomRSVPForm />
        {/* <ModalBody>
          <Text mb="16px">Please fill this out instead...</Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr="16px">
            See a template
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default RSVPHelpModal;
