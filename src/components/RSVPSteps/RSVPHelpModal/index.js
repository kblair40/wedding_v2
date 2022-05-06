import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useToast,
  Box,
  Text,
  Flex,
  Icon,
  Heading,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { MdCheckCircle } from "react-icons/md";
import { FaRegSadTear } from "react-icons/fa";

import { toTitleCase } from "utils/helpers";
import CustomRSVPForm from "components/RSVPSteps/RSVPHelpModal/CustomRSVPForm";

const RSVPHelpModal = ({ isOpen, onClose }) => {
  const key = "W69ff_xL68cgt7IZI";

  const toast = useToast();

  const handleSubmit = async (data, addAnother = false) => {
    // console.log("DATA:", data);
    try {
      await emailjs.send("service_ujghu3o", "template_lxrzaso", data, key);

      let isAttending = data.attending === "yes";
      let message = isAttending
        ? "We'll see you there!"
        : "Sorry you can't make it";

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
        <ModalHeader
          // border="1px solid #ccc"
          //
          pb="8px"
        >
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

const CustomToast = ({ isAttending, title, description }) => {
  return (
    <Flex
      p="8px 24px"
      borderRadius="8px"
      bg={isAttending ? "primary.400" : "error.400"}
      my="4px"
      w="min-content"
    >
      {!isAttending ? (
        <Icon as={FaRegSadTear} color="white" boxSize="24px" />
      ) : (
        <Icon as={MdCheckCircle} color="white" boxSize="24px" />
      )}

      <Box ml="16px">
        <Text
          whiteSpace="nowrap"
          color="white"
          fontWeight="700"
          fontSize="lg"
          lineHeight="18px"
          mb="8px"
        >
          {title}
        </Text>
        <Text
          whiteSpace="nowrap"
          color="white"
          fontWeight="500"
          lineHeight="16px"
        >
          {description}
        </Text>
      </Box>
    </Flex>
  );
};
