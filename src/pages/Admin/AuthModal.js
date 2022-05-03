import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Input,
  Button,
} from "@chakra-ui/react";

const AuthModal = ({ isOpen, onClose, handleSubmit }) => {
  const [inputVal, setInputVal] = useState("");
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pt="16px">
        <ModalBody>
          <Input onChange={(e) => setInputVal(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => handleSubmit(inputVal)}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
