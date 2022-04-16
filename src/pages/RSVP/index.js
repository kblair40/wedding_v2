import React, { useState } from "react";
import { Box, Center, Flex } from "@chakra-ui/react";
import { Transition } from "react-transition-group";

import { patchGuest } from "api/api";
import RSVPForm from "components/RSVPSteps/RSVPForm";
import GuestSearch from "components/RSVPSteps/GuestSearch";
import SelectGuests from "components/RSVPSteps/SelectGuests";
import PageContainer from "components/containers/PageContainer";
import InviteCard from "components/containers/InviteCard";

// import { getGuestByName, getRelatedGuests } from "api/api";

const RSVP = () => {
  const [guest, setGuest] = useState();
  const [relatedGuests, setRelatedGuests] = useState();
  const [step, setStep] = useState(1);
  const [checkedGuests, setCheckedGuests] = useState();

  const getSearchResults = (guest, relatedGuests) => {
    console.log("SEARCH RESULTES:", { guest, relatedGuests });
    setGuest(guest);
    if (relatedGuests) {
      setRelatedGuests(relatedGuests);
    } else {
      getCheckedGuests([]);
      // setStep(3);
    }
  };

  const getCheckedGuests = (guestIndexes) => {
    console.log("\n\nINDEXES:", guestIndexes);
    setCheckedGuests(guestIndexes);
    setTimeout(() => {
      setStep(3);
    }, 500); // timeoutDuration = 500
  };

  const handleSubmitRSVPForm = async (data, respondingGuests) => {
    console.log("\n\nDATA:", data, "\n\n", { respondingGuests });
    let names = Object.keys(data).filter((name) => name !== "anythingElse");

    for (let name of names) {
      let [fn, ln] = name.split(" ");

      let guest = respondingGuests.find((g) => {
        return g.first_name === fn && g.last_name === ln;
      });

      if (!guest) {
        console.log("\n\n\n\nINVALID GUEST:", guest, "\n\n\n");
        continue;
      }

      const guestData = data[name];
      const res = await patchGuest(guest.id, {
        ...guestData,
        special_requests: data.special_requests,
      });
      console.log("RES:", res);
    }
    return true;
    // return false;
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
      <Flex
        w="100%"
        justifyContent="center"
        // border="1px solid #000"
      >
        <Box
          // border="1px solid #ccc"
          minW="340px"
          maxW={{
            base: "420px",
            sm: "524px", // allows full placeholder text to show
            md: "720px",
            lg: "900px",
          }}
        >
          <InviteCard
          // showBorder
          //
          >
            <Transition
              in={!guest}
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

            {relatedGuests && (
              <Center>
                <SelectGuests
                  checkedGuests={checkedGuests}
                  getCheckedGuests={getCheckedGuests}
                  step={step}
                  guest={guest}
                  relatedGuests={relatedGuests}
                />
              </Center>
            )}

            <RSVPForm
              step={step}
              guest={guest}
              relatedGuests={relatedGuests}
              checkedGuests={checkedGuests}
              handleSubmit={handleSubmitRSVPForm}
            />
          </InviteCard>
        </Box>
      </Flex>
    </PageContainer>
  );
};

export default RSVP;
