import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Transition } from "react-transition-group";

const SelectGuests = ({
  guest,
  relatedGuests,
  step,
  getCheckedGuests,
  checkedGuests: parentCheckedGuests,
  // nextStep,
}) => {
  const [checkedGuests, setCheckedGuests] = useState([]);
  const [showNextButton, setShowNextButton] = useState(false);
  const [display, setDisplay] = useState();

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

  const defaultStyle = {
    transition: `opacity 500ms ease-in-out`,
    opacity: 0,
  };

  const fadeInStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Box maxW="580px" display={display}>
      <Transition
        in={step === 2 && !parentCheckedGuests}
        timeout={500}
        onEnter={() => setShowNextButton(true)}
        onExited={() => setDisplay("none")}
        unmountOnExit
      >
        {(state) => (
          <React.Fragment>
            <Box
              style={{
                ...defaultStyle,
                ...fadeInStyles[state],
              }}
            >
              <FormControl>
                <FormLabel>
                  Who would you like to respond for? (check all that apply)
                </FormLabel>
                {guest && (
                  <Checkbox pb="8px" isChecked={true}>
                    {`${guest.first_name} ${guest.last_name}`}
                  </Checkbox>
                )}

                {guest && relatedGuests && (
                  <VStack alignItems="flex-start">
                    {[...relatedGuests].map((guest, i) => {
                      const name = `${guest.first_name} ${guest.last_name}`;
                      return (
                        <Checkbox
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
                  // nextStep();
                }}
              >
                {/* <Button rightIcon={<ArrowForwardIcon />} onClick={handleSubmit}> */}
                Next
              </Button>
            </HStack>
          </React.Fragment>
        )}
      </Transition>
    </Box>
  );
};

export default SelectGuests;
