import React, { useState } from "react";
import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { toTitleCase } from "utils/helpers";

const SelectGuestsModal = ({
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
    <React.Fragment>
      <ModalHeader fontSize="lg">
        Select the guests you will be replying for
      </ModalHeader>
      <ModalBody>
        <FormControl>
          <FormLabel fontWeight="600">Check all that apply</FormLabel>
          {guest && (
            <Flex alignItems="flex-end" mb="8px">
              <Checkbox isChecked={true} borderColor="text.secondary">
                {/* {`${guest.first_name} ${guest.last_name}`} */}
                {toTitleCase(guest.full_name)}
              </Checkbox>
              <Text
                ml="8px"
                fontSize="sm"
                color="text.secondary"
                fontWeight="500"
              >
                Not you?&nbsp;&nbsp;
              </Text>
              <Box
                // ml="6px"
                cursor="pointer"
                _hover={{
                  p: { textDecoration: "underline", color: "text.primary" },
                }}
                onClick={showHelpModal}
              >
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  as={"p"}
                  color="text.secondary"
                >
                  Email us instead
                </Text>
              </Box>
            </Flex>
          )}

          {guest && relatedGuests && (
            <Flex flexDirection="column">
              {[...relatedGuests].map((guest, i) => {
                // const name = `${guest.first_name} ${guest.last_name}`;
                const name = toTitleCase(guest.full_name);
                return (
                  <Checkbox
                    mb="8px"
                    fontWeight={checkedGuests.includes(i) ? "400" : "300"}
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
          variant="main_filled"
          onClick={handleSubmit}
          rightIcon={<ArrowForwardIcon boxSize="20px" />}
        >
          Next
        </Button>
      </ModalFooter>
    </React.Fragment>
  );
};

export default SelectGuestsModal;
