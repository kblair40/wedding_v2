import React, { useEffect, useState } from "react";
import { Box, Heading, Center, Button } from "@chakra-ui/react";
import { Transition } from "react-transition-group";

import RSVPForm from "components/RSVPForm";
import GuestSearch from "./GuestSearch";
import SelectGuests from "components/SelectGuests";
import PageContainer from "components/containers/PageContainer";

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
  };

  const getCheckedGuests = (guestIndexes) => {
    setCheckedGuests(guestIndexes);
    setTimeout(() => {
      setStep(3);
    }, 500); // timeoutDuration = 500
  };

  const handleSubmitRSVPForm = (data) => {
    console.log("DATA:", data);
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
    <PageContainer center pt="16px">
      <Transition
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
        <SelectGuests
          checkedGuests={checkedGuests}
          // nextStep={() => {
          //   console.log("setting to step 3");
          //   setStep(3);
          // }}
          getCheckedGuests={getCheckedGuests}
          step={step}
          guest={guest}
          relatedGuests={relatedGuests}
        />
      </Center>

      <RSVPForm
        step={step}
        guest={guest}
        relatedGuests={relatedGuests}
        checkedGuests={checkedGuests}
        handleSubmit={handleSubmitRSVPForm}
      />

      {/* <Button
        position="fixed"
        top="1rem"
        left="1rem"
        onClick={() => setFadeOut(!fadeOut)}
      >
        Toggle fade
      </Button> */}
    </PageContainer>
  );
};

export default RSVP;
