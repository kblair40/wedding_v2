import React, { useEffect, useState } from "react";
import { Box, Heading, Center, Button } from "@chakra-ui/react";
import { Transition } from "react-transition-group";

import RSVPForm from "components/RSVPForm";
import GuestSearch from "./GuestSearch";
import SelectGuests from "components/SelectGuests";
// import { getGuestByName, getRelatedGuests } from "api/api";

const RSVP = () => {
  const [guest, setGuest] = useState();
  const [relatedGuests, setRelatedGuests] = useState();
  const [step, setStep] = useState(1);
  const [checkedGuests, setCheckedGuests] = useState();

  const getSearchResults = (guest, relatedGuests) => {
    setGuest(guest);
    if (relatedGuests) {
      setRelatedGuests(relatedGuests);
    }
    // setStep(2);
  };

  const defaultStyle = {
    transition: `opacity 500ms ease-in-out`,
    opacity: 0,
  };

  const fadeOutStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Box
      px="24px"
      // border="1px solid #ccc"
      pt="16px"
      //
    >
      <Transition
        // in={step === 1}
        in={!relatedGuests}
        timeout={500}
        onExited={() => setStep(2)}
        unmountOnExit
      >
        {(state) => (
          <Box
            style={{
              ...defaultStyle,
              ...fadeOutStyles[state],
            }}
          >
            <GuestSearch getSearchResults={getSearchResults} />
          </Box>
        )}
      </Transition>

      <Center>
        <SelectGuests step={step} guest={guest} relatedGuests={relatedGuests} />
      </Center>

      {/* <RSVPForm /> */}

      {/* <Button
        position="fixed"
        top="1rem"
        left="1rem"
        onClick={() => setFadeOut(!fadeOut)}
      >
        Toggle fade
      </Button> */}
    </Box>
  );
};

export default RSVP;
