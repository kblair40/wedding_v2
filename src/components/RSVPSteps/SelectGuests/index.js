import React, { useState, useEffect } from "react";
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

const SelectGuests = ({
  guest,
  relatedGuests,
  step,
  getCheckedGuests,
  showHelpModal,
  startOver,
  checkedGuests: parentCheckedGuests,
}) => {
  const [checkedGuests, setCheckedGuests] = useState([]);
  const [showNextButton, setShowNextButton] = useState(true);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    if (relatedGuests && relatedGuests.length) {
      setDisplay("block");
    }
  }, [relatedGuests]);

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

  // if (!relatedGuests.length) {
  //   return <Box />;
  // }

  return (
    <Box maxW="580px" display={display}>
      {/* <Button
        onClick={startOver}
        position="absolute"
        top="1rem"
        left=".5rem"
        // size="sm"
        zIndex={10000}
        variant="ghost"
      >
        Reset
      </Button> */}
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
                ml="8px"
                // lineHeight="100%"
                fontSize="sm"
                fontStyle="italic"
                // border="1px solid red"
              >
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
        // border="1px solid black"
        pt="16px"
        justifyContent="flex-end"
        opacity={showNextButton ? 1 : 0}
        transition="1s"
      >
        <Button onClick={startOver} zIndex={10000} variant="ghost">
          Reset
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          onClick={() => {
            handleSubmit();
            // setShowNextButton(false);
          }}
          color="neutral.black"
          fontWeight="500"
        >
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default SelectGuests;
