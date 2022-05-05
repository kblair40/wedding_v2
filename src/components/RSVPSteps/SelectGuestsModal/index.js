import React, { useState } from "react";
import {
  Modal,
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
}) => {
  const [checkedGuests, setCheckedGuests] = useState([]);

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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      // onCloseComplete={}
      motionPreset="slideInBottom"
      preserveScrollBarGap
    >
      {/* <ModalOverlay className="select-guests" /> */}
      <ModalContent
        // ref={selectGuestsRef}
        className="select-guests"
      >
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
                  <Text fontSize="sm" fontWeight="7=500" as={"p"}>
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
