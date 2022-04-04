import React, { useState, useEffect } from "react";
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
  handleChangeRespondingGuests,
  step,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (step === 2) {
      setShow(true);
    }
  }, [step]);

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
    <Box maxW="580px">
      <Transition in={step === 2} timeout={500}>
        {(state) => (
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
                        // onChange={() => handleChangeRespondingGuests(i)}
                      >
                        {name}
                      </Checkbox>
                    );
                  })}
                </VStack>
              )}
            </FormControl>
          </Box>
        )}
      </Transition>

      <HStack pt="24px" justifyContent="flex-end">
        <Button rightIcon={<ArrowForwardIcon />}>Next</Button>
      </HStack>
    </Box>
  );
};

export default SelectGuests;
