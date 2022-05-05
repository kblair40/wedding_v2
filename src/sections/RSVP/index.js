import React, { useState, useRef, useEffect } from "react";
import { Box, Center, Flex, Button, ModalOverlay } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

import { patchGuest } from "api/api";
import RSVPForm from "components/RSVPSteps/RSVPForm";
import GuestSearch from "components/RSVPSteps/GuestSearch";
import SelectGuests from "components/RSVPSteps/SelectGuests";
import SelectGuestsModal from "components/RSVPSteps/SelectGuestsModal";
import RSVPHelpModal from "components/RSVPSteps/RSVPHelpModal";
import RSVPFormModal from "components/RSVPSteps/RSVPFormModal";
import SectionLabel from "components/SectionLabel";

import "./index.css";

const RSVP = ({ setInView }) => {
  const [guest, setGuest] = useState();
  const [relatedGuests, setRelatedGuests] = useState();
  const [step, setStep] = useState(1);
  const [checkedGuests, setCheckedGuests] = useState();
  const [step1Class, setStep1Class] = useState("fade-in-half-second");
  const [step2Class, setStep2Class] = useState("hidden");
  const [step3Class, setStep3Class] = useState("hidden");
  const [showHelp, setShowHelp] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [showSelectGuestsModal, setShowSelectGuestsModal] = useState(false);
  const [showRSVPFormModal, setShowRSVPFormModal] = useState(false);

  let navigate = useNavigate();

  const helpOpenedBy = useRef("");

  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  const startOver = () => {
    setGuest();
    setRelatedGuests();
    setStep(1);
    setCheckedGuests();
    setStep2Class("hidden");
    setStep3Class("hidden");
    setShowHelp(false);
    setStep1Class("fade-in-half-second");
  };

  useEffect(() => {
    // console.log("RSVP inView:", inView);
    if (inView) {
      setInView("rsvp");
    }
  }, [inView]);

  const getSearchResults = (guest, relatedGuests) => {
    // console.log("SEARCH RESULTS:", { guest, relatedGuests });
    setGuest(guest);
    if (relatedGuests) {
      setRelatedGuests(relatedGuests);
      // setShowSelectGuestsModal(true);
      openSelectGuestsModal();
      // transitionOneToTwo();
    } else {
      getCheckedGuests([]);
      setShowRSVPFormModal(true);
      // transitionOneToThree();
    }
    // setStep(2);
    // setStep1Class("fade-out-half-second");
    // setTimeout(() => {
    //   setStep1Class("hidden");
    //   setTimeout(() => {
    //     setStep2Class("fade-in-half-second");
    //   }, 50);
    // }, 600);
  };

  const openSelectGuestsModal = () => {
    setShowSelectGuestsModal(true);

    // gsap.to('.select-guests');
  };

  const transitionOneToTwo = () => {
    setStep(2);
    setStep1Class("fade-out-half-second");
    setTimeout(() => {
      setStep1Class("hidden");
      setTimeout(() => {
        setStep2Class("fade-in-half-second");
      }, 50);
    }, 600);
  };

  const transitionOneToThree = () => {
    setStep(3);
    setStep1Class("fade-out-half-second");
    setStep2Class("hidden");
    setTimeout(() => {
      setStep1Class("hidden");
      setTimeout(() => {
        setStep3Class("fade-in-half-second");
      }, 50);
    }, 600);
  };

  const transitionTwoToThree = () => {
    setStep(3);
    setStep2Class("fade-out-half-second");
    setTimeout(() => {
      setStep2Class("hidden");
      setTimeout(() => {
        setStep3Class("fade-in-half-second");
      }, 50);
    }, 600);
  };

  const getCheckedGuests = (guestIndexes) => {
    // console.log("\n\nINDEXES:", guestIndexes);
    setCheckedGuests(guestIndexes);

    setShowSelectGuestsModal(false);
    setShowRSVPFormModal(true);

    // transitionTwoToThree();
  };

  const handleSubmitRSVPForm = async (data, respondingGuests) => {
    // console.log("\n\nDATA:", data, "\n\n", { respondingGuests });
    let names = Object.keys(data).filter((name) => name !== "special_requests");
    console.log("\n\nNAMES:", names);

    for (let name of names) {
      let [fn, ln] = name.split(" ");

      let guest = respondingGuests.find((g) => {
        return g.first_name === fn && g.last_name === ln;
      });
      console.log("\nGUEST:", guest);

      if (!guest) {
        console.warn("\n\n\n\nINVALID GUEST:", guest, "\n\n\n");
        continue;
      }

      const guestData = data[name];
      try {
        const res = await patchGuest(guest.id, {
          ...guestData,
          special_requests: data.special_requests,
          replied: "TRUE",
        });
        console.log("RES:", res);
      } catch (e) {
        console.log(`\n\n\nFAILED PATCHING ${guestData}:`, e, "\n\n\n");
      }
    }

    setShowRSVPFormModal(false);
    return true;
  };

  const closeHelpModal = () => {
    setShowHelp(false);

    if (helpOpenedBy.current !== "GuestSearch") {
      navigate(0);
    }

    helpOpenedBy.current = "";
  };

  const handleClickShowHelp = () => {
    setShowSelectGuestsModal(false);
    setShowHelp(true);
  };

  return (
    <Box
      bg="#f7f5f1"
      w="100%"
      pb="32px"
      px="24px"
      // border="1px solid #ccc"
      overflowY="auto"
      minH="330px"
      maxH="500px"
      position="relative"
    >
      <SectionLabel label="rsvp" />

      <Box ref={inViewRef} />

      {/* {(showSelectGuestsModal || showRSVPFormModal) && (
        <Box
          position="fixed"
          zIndex="-1"
          w="100vw"
          h="100vh"
          bg="rgba(0, 0, 0, 0.6)"
          border="3px solid green"
        />
      )} */}

      <Flex w="100%" justifyContent="center">
        <Box
          minW="340px"
          maxW={{
            base: "420px",
            sm: "524px", // allows full placeholder text to show
            md: "720px",
            lg: "900px",
          }}
        >
          {/* <Box className={step1Class}> */}
          <GuestSearch
            getSearchResults={getSearchResults}
            onChange={(e) => setSearchInput(e.target.value)}
            searchInput={searchInput}
            showHelp={() => {
              helpOpenedBy.current = "GuestSearch";
              setShowHelp(true);
            }}
          />
          {/* </Box> */}

          {/* <Box className={step2Class}>
            <Center>
              <SelectGuests
                startOver={startOver}
                checkedGuests={checkedGuests}
                getCheckedGuests={getCheckedGuests}
                step={step}
                guest={guest}
                relatedGuests={relatedGuests}
                showHelpModal={handleClickShowHelp}
              />
            </Center>
          </Box>

          <Box className={step3Class}>
            <RSVPForm
              startOver={startOver}
              guest={guest}
              relatedGuests={relatedGuests}
              checkedGuests={checkedGuests}
              handleSubmit={handleSubmitRSVPForm}
            />
          </Box> */}
        </Box>
      </Flex>

      {showSelectGuestsModal && (
        <SelectGuestsModal
          isOpen={showSelectGuestsModal}
          onClose={() => setShowSelectGuestsModal(false)}
          guest={guest}
          getCheckedGuests={getCheckedGuests}
          relatedGuests={relatedGuests}
          showHelpModal={handleClickShowHelp}
        />
      )}

      {showRSVPFormModal && (
        <RSVPFormModal
          isOpen={showRSVPFormModal}
          onClose={() => setShowRSVPFormModal(false)}
          startOver={startOver}
          guest={guest}
          relatedGuests={relatedGuests}
          checkedGuests={checkedGuests}
          onSubmit={handleSubmitRSVPForm}
        />
      )}

      {showHelp && <RSVPHelpModal isOpen={showHelp} onClose={closeHelpModal} />}
    </Box>
  );
};

export default RSVP;
