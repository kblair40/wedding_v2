import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

import { toTitleCase } from "utils/helpers";
import CustomRSVPForm from "components/RSVPSteps/RSVPHelpModal/CustomRSVPForm";

const RSVPHelpModal = ({ isOpen, onClose }) => {
  const key = "W69ff_xL68cgt7IZI";

  const toast = useToast();

  const handleSubmit = async (data, addAnother = false) => {
    // console.log("DATA:", data);
    try {
      const res = await emailjs.send(
        "service_ujghu3o",
        "template_lxrzaso",
        data,
        key
      );
      // console.log("RES:", res);
      let message;
      if (data.attending === "yes") {
        message = "We'll see you there!";
      } else {
        message = "Sorry you can't make it";
      }

      toast({
        title: `Thanks, ${toTitleCase(data.first_name)}`,
        description: message,
        status: "success",
        duration: 7000,
        isClosable: true,
      });
    } catch (err) {
      console.warn("FAILED SENDING EMAIL");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="100%" maxW={{ base: "359px", sm: "420px" }} mx="auto">
        <ModalHeader fontWeight="500">Sorry about that!</ModalHeader>

        <CustomRSVPForm onSubmit={handleSubmit} onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};

export default RSVPHelpModal;
