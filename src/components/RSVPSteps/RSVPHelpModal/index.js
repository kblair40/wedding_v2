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

const RSVPHelpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight="500">Sorry about that!</ModalHeader>
        <ModalBody>
          <Text>
            Please send an email to kevandshanwed@gmail.com with the following
            information:
          </Text>
          <UnorderedList mt="8px">
            <ListItem>
              The name (first & last) of each guest in your group
            </ListItem>
            <ListItem>
              Whether each guest will or will not be attending
            </ListItem>
            <ListItem>
              Each guest's dinner entree choice (chicken or beef)
            </ListItem>
            <ListItem>
              Anything else you'd like to ask or would like us to know
            </ListItem>
          </UnorderedList>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr="16px">
            See a template
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RSVPHelpModal;
