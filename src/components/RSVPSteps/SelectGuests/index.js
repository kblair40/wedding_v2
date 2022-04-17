import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Checkbox,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import RSVPHelpModal from "components/RSVPSteps/RSVPHelpModal";

const SelectGuests = ({
  guest,
  relatedGuests,
  step,
  getCheckedGuests,
  checkedGuests: parentCheckedGuests,
}) => {
  const [checkedGuests, setCheckedGuests] = useState([]);
  const [showNextButton, setShowNextButton] = useState(false);
  const [display, setDisplay] = useState();
  const [showHelp, setShowHelp] = useState(false);

  const handleChangeRespondingGuests = (val) => {
    console.log("VALUE:", val);
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
    <Box maxW="580px" display={display}>
      <React.Fragment>
        <Box>
          <FormControl>
            <FormLabel fontWeight="400">
              Who would you like to respond for? (check all that apply)
            </FormLabel>
            {guest && (
              <Flex
                alignItems="flex-end"
                // border="1px solid blue"
                //
                mb="8px"
              >
                <Checkbox
                  // pb="8px"
                  isChecked={true}
                  fontWeight="400"
                  // border="1px solid orange"
                  // alignItems="center"
                >
                  {`${guest.first_name} ${guest.last_name}`}
                </Checkbox>
                <Text
                  ml="16px"
                  // lineHeight="100%"
                  fontSize="sm"
                  fontStyle="italic"
                  // border="1px solid red"
                >
                  Not you?
                </Text>
                <Box
                  ml="8px"
                  cursor="pointer"
                  _hover={{ p: { textDecoration: "underline" } }}
                  onClick={() => setShowHelp(true)}
                >
                  <Text fontSize="sm" fontWeight="500" as={"p"}>
                    Email us instead
                  </Text>
                </Box>
              </Flex>
            )}

            {guest && relatedGuests && (
              <VStack alignItems="flex-start">
                {[...relatedGuests].map((guest, i) => {
                  const name = `${guest.first_name} ${guest.last_name}`;
                  return (
                    <Checkbox
                      fontWeight={checkedGuests.includes(i) ? "400" : "300"}
                      key={i}
                      value={i}
                      onChange={() => handleChangeRespondingGuests(i)}
                    >
                      {name}
                    </Checkbox>
                  );
                })}
              </VStack>
            )}
          </FormControl>
        </Box>

        <HStack
          pt="16px"
          justifyContent="flex-end"
          opacity={showNextButton ? 1 : 0}
          transition="1s"
        >
          <Button
            rightIcon={<ArrowForwardIcon />}
            onClick={() => {
              handleSubmit();
              setShowNextButton(false);
            }}
            color="neutral.black"
            fontWeight="500"
          >
            Next
          </Button>
        </HStack>
      </React.Fragment>
      <RSVPHelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </Box>
  );
};

export default SelectGuests;
