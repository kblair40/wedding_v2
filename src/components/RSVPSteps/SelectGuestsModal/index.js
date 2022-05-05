import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const SelectGuestsModal = ({
  isOpen,
  onClose,
  guest,
  relatedGuests,
  getCheckedGuests,
  showHelpModal,
  startOver,
}) => {
  const [checkedGuests, setCheckedGuests] = useState([]);
  // const [showNextButton, setShowNextButton] = useState(true);

  const handleChangeRespondingGuests = (val) => {
    // console.log("VALUE:", val);
    if (checkedGuests.includes(val)) {
      setCheckedGuests(checkedGuests.filter((idx) => idx !== val));
    } else {
      setCheckedGuests([...checkedGuests, val]);
    }
  };

  const handleSubmit = () => {
    getCheckedGuests(checkedGuests);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Who would you like to respond for?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel fontWeight="600">Check all that apply</FormLabel>
            {guest && (
              <Flex alignItems="flex-end" mb="8px">
                <Checkbox isChecked={true} borderColor="text.secondary">
                  {`${guest.first_name} ${guest.last_name}`}
                </Checkbox>
                <Text ml="8px" fontSize="sm" fontStyle="italic">
                  Not you?
                </Text>
                <Box
                  ml="6px"
                  cursor="pointer"
                  _hover={{ p: { textDecoration: "underline" } }}
                  onClick={showHelpModal}
                >
                  <Text fontSize="sm" fontWeight="500" as={"p"}>
                    Email us instead
                  </Text>
                </Box>
              </Flex>
            )}

            {guest && relatedGuests && (
              <Flex flexDirection="column">
                {[...relatedGuests].map((guest, i) => {
                  const name = `${guest.first_name} ${guest.last_name}`;
                  return (
                    <Checkbox
                      mb="8px"
                      fontWeight={checkedGuests.includes(i) ? "400" : "300"}
                      // size="lg"
                      key={i}
                      value={i}
                      onChange={() => handleChangeRespondingGuests(i)}
                      borderColor="text.secondary"
                    >
                      {name}
                    </Checkbox>
                  );
                })}
              </Flex>
            )}
          </FormControl>
        </ModalBody>

        <ModalFooter>
          {/* <Button
            position="relative"
            px="8px"
            right="8px"
            leftIcon={
              <ArrowForwardIcon
                boxSize="20px"
                style={{
                  transform: "rotate(180deg)",
                }}
              />
            }
            variant="ghost"
          >
            Back
          </Button> */}

          <Button variant="ghost" onClick={onClose} mr="16px">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            rightIcon={<ArrowForwardIcon boxSize="20px" />}
          >
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SelectGuestsModal;
