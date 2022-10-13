import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useToast,
  Text,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

import CustomToast from "components/CustomToast";
import { toTitleCase } from "utils/helpers";
import CustomRSVPForm from "./CustomRSVPForm";

const RSVPHelpModal = ({ isOpen, onClose, setHasReplied }) => {
  const key = "W69ff_xL68cgt7IZI";

  const toast = useToast();

  const handleSubmit = async (data) => {
    try {
      await emailjs.send("service_ujghu3o", "template_lxrzaso", data, key);

      let isAttending = data.attending === "yes";
      let message = isAttending
        ? "We'll see you there!"
        : "Sorry you can't make it";

      setHasReplied(true);

      toast({
        duration: 7000,
        isClosable: true,
        render: () => (
          <CustomToast
            description={message}
            isAttending={isAttending}
            title={`Thanks, ${toTitleCase(data.first_name)}!`}
          />
        ),
      });
    } catch (err) {
      console.warn("FAILED SENDING EMAIL:", err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent w="100%" maxW={{ base: "359px", sm: "420px" }} mx="auto">
        <ModalHeader pb="8px">
          <Text fontSize="xl" fontWeight="700" mb="8px">
            Sorry about that!
          </Text>

          <Text fontSize="lg" fontWeight="500">
            Please fill this out instead...
          </Text>
        </ModalHeader>

        <CustomRSVPForm onSubmit={handleSubmit} onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};

export default RSVPHelpModal;
