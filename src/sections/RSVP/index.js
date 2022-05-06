import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Modal,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

import { patchGuest } from "api/api";
// import RSVPForm from "components/RSVPSteps/RSVPForm";
import GuestSearch from "components/RSVPSteps/GuestSearch";
// import SelectGuests from "components/RSVPSteps/SelectGuests";
import SelectGuestsModal from "components/RSVPSteps/SelectGuestsModal";
import RSVPHelpModal from "components/RSVPSteps/RSVPHelpModal";
import RSVPFormModal from "components/RSVPSteps/RSVPFormModal";
import SectionLabel from "components/SectionLabel";

import "./index.css";

const RSVP = ({ setInView }) => {
  const [guest, setGuest] = useState();
  const [relatedGuests, setRelatedGuests] = useState();
  const [checkedGuests, setCheckedGuests] = useState();
  const [showHelp, setShowHelp] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [showSelectGuestsModal, setShowSelectGuestsModal] = useState(false);
  const [showRSVPFormModal, setShowRSVPFormModal] = useState(false);

  const helpOpenedBy = useRef("");

  const progress = useRef({
    one: false,
    two: false,
    three: false,
  });

  const updateProgress = (newProgress) => {
    progress.current = { ...progress.current, ...newProgress };
  };

  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  const startOver = () => {
    // setGuest();
    // setRelatedGuests();
    // setStep(1);
    // setCheckedGuests();
    // setStep2Class("hidden");
    // setStep3Class("hidden");
    // setShowHelp(false);
    // setStep1Class("fade-in-half-second");
  };

  useEffect(() => {
    if (inView) {
      setInView("rsvp");
    }
  }, [inView]);

  const getSearchResults = (guest, relatedGuests) => {
    setGuest(guest);
    if (relatedGuests) {
      setRelatedGuests(relatedGuests);
      setShowSelectGuestsModal(true);
    } else {
      getCheckedGuests([]);
      setShowRSVPFormModal(true);
    }
  };

  const getCheckedGuests = (guestIndexes) => {
    setCheckedGuests(guestIndexes);
    setShowRSVPFormModal(true);
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

    helpOpenedBy.current = "";
  };

  const handleClickShowHelp = () => {
    console.log("SHOW HELP");
    setShowSelectGuestsModal(false);

    setTimeout(() => {
      setShowHelp(true);
    }, 100);
  };

  return (
    <Box bg="#f7f5f1" w="100%" pb="32px" px="24px" minH="330px" maxH="500px">
      <SectionLabel label="rsvp" />

      {/* <Box boxSize="50px" bg="primary.200" /> */}
      {/* <Box boxSize="50px" bg="error.200" /> */}

      <Box ref={inViewRef} />

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
          <GuestSearch
            getSearchResults={getSearchResults}
            onChange={(e) => setSearchInput(e.target.value)}
            searchInput={searchInput}
            showHelp={() => {
              helpOpenedBy.current = "GuestSearch";
              setShowHelp(true);
            }}
          />
        </Box>
      </Flex>

      {/*  */}
      <Modal
        isOpen={showSelectGuestsModal || showRSVPFormModal}
        onClose={() => {
          setShowRSVPFormModal(false);
          setShowSelectGuestsModal(false);
        }}
        motionPreset="none"
        scrollBehavior="inside"
        overflowY="auto"
        isCentered
        preserveScrollBarGap
      >
        <ModalOverlay />

        {showSelectGuestsModal && (
          <SelectGuestContent
            onClose={() => setShowSelectGuestsModal(false)}
            guest={guest}
            getCheckedGuests={getCheckedGuests}
            relatedGuests={relatedGuests}
            handleClickShowHelp={handleClickShowHelp}
          />
        )}

        {!showSelectGuestsModal && checkedGuests && (
          <RSVPFormContent
            onClose={() => setShowRSVPFormModal(false)}
            guest={guest}
            relatedGuests={relatedGuests}
            checkedGuests={checkedGuests}
            onSubmit={handleSubmitRSVPForm}
          />
        )}
      </Modal>

      {showHelp && <RSVPHelpModal isOpen={showHelp} onClose={closeHelpModal} />}
    </Box>
  );
};

export default RSVP;

const RSVPFormContent = ({
  onClose,
  guest,
  relatedGuests,
  checkedGuests,
  onSubmit,
}) => {
  useEffect(() => {
    gsap.set(".rsvp-form", { display: "initial" });
    // slides in from bottom of screen
    gsap.fromTo(
      ".rsvp-form",
      {
        x: "200%",
      },
      { x: "0%", duration: "0.2" }
    );
  }, []);

  return (
    <ModalContent
      minW="340px"
      className="rsvp-form"
      display="none"
      maxH="90vh"
      overflowY="auto"
    >
      <ModalCloseButton />

      <RSVPFormModal
        onClose={onClose}
        guest={guest}
        relatedGuests={relatedGuests}
        checkedGuests={checkedGuests}
        onSubmit={onSubmit}
      />
    </ModalContent>
  );
};

const SelectGuestContent = ({
  getCheckedGuests,
  guest,
  onClose,
  relatedGuests,
  handleClickShowHelp,
}) => {
  useEffect(() => {
    gsap.set(".select-guests", { display: "initial" });
    // slides in from bottom of screen
    gsap.fromTo(
      ".select-guests",
      {
        y: "200%",
      },
      { y: "0%", duration: "0.1" }
    );
  }, []);

  const slideOutLeft = () => {
    gsap.to(".select-guests", {
      x: "-200%",
      duration: ".2",
      onComplete: () => {
        console.log("SLIDE OUT LEFT COMPLETE!");
        onClose();
      },
    });
  };

  const receiveGuestIndexes = (guestIndexes) => {
    slideOutLeft();

    getCheckedGuests(guestIndexes);
  };

  return (
    <ModalContent className="select-guests" display="none">
      <ModalCloseButton />
      <SelectGuestsModal
        onClose={onClose}
        guest={guest}
        getCheckedGuests={receiveGuestIndexes}
        relatedGuests={relatedGuests}
        showHelpModal={handleClickShowHelp}
      />
    </ModalContent>
  );
};
