import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

import CustomRSVPForm from "components/RSVPSteps/RSVPHelpModal/CustomRSVPForm";

const RSVPHelpModal = ({ isOpen, onClose }) => {
  const key = "W69ff_xL68cgt7IZI";

  const handleSubmit = async (data, addAnother = false) => {
    console.log("DATA:", data);
    const res = await emailjs.send(
      "service_ujghu3o",
      "template_lxrzaso",
      data,
      key
    );
    console.log("RES:", res);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight="500">Sorry about that!</ModalHeader>

        <CustomRSVPForm onSubmit={handleSubmit} />
      </ModalContent>
    </Modal>
  );
};

export default RSVPHelpModal;
