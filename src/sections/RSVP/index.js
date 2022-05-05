import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  Button,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Modal,
  Text,
} from "@chakra-ui/react";
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
      setShowSelectGuestsModal(true);
      // openSelectGuestsModal();
      // transitionOneToTwo();
    } else {
      getCheckedGuests([]);
      setShowRSVPFormModal(true);
      // transitionOneToThree();
    }
  };

  const openSelectGuestsModal = () => {
    // setShowSelectGuestsModal(true);

    gsap.set(".select-guests", {
      y: "100vh",
      // display: "block",
    });

    // setTimeout(() => {
    gsap.to(".select-guests", {
      duration: ".5",
      y: "0vh",
      onComplete: () => console.log("FINISHED TRANSITION!"),
    });
    // }, 100); // 0.1 seconds
  };

  const transitionTwoToThree = () => {
    // transitionOutSelectGuests();
    // transitionInRSVPForm();
  };

  const getCheckedGuests = (guestIndexes) => {
    // console.log("\n\nINDEXES:", guestIndexes);
    setCheckedGuests(guestIndexes);

    transitionTwoToThree();
    // transitionOutSelectGuests();
  };

  const transitionOutSelectGuests = () => {
    gsap.to(".select-guests", {
      duration: 0.5,
      opacity: 0,
      y: -500,
      onComplete: () => {
        setShowSelectGuestsModal(false);
      },
    });
  };

  const transitionInRSVPForm = () => {
    setShowRSVPFormModal(true);

    gsap.fromTo(
      ".rsvp-form",
      { y: 500 },
      {
        duration: 0.5,
        y: 0,
      }
    );
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
      // px="24px"
      border="1px solid #ccc"
      overflowY="auto"
      minH="330px"
      maxH="500px"
      sx={{
        ".chakra-modal__content-container": {
          zIndex: -1,
        },
        ".chakra-modal__content": {
          zIndex: -1,
          border: "1px solid green",
        },
      }}
    >
      <SectionLabel label="rsvp" />

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
        isCentered
        preserveScrollBarGap
      >
        <ModalOverlay
          // opacity={0}
          // transition=".5s"
          onClick={() => console.log("OVERLAY CLICKED!")}
        />

        {showSelectGuestsModal && (
          <SelectGuestContent
            onClose={() => setShowSelectGuestsModal(false)}
            guest={guest}
            getCheckedGuests={getCheckedGuests}
            relatedGuests={relatedGuests}
            showHelpModal={handleClickShowHelp}
          />
          // <ModalContent className="select-guests">
          //   <ModalCloseButton />
          //   <SelectGuestsModal
          //     onClose={() => setShowSelectGuestsModal(false)}
          //     guest={guest}
          //     getCheckedGuests={getCheckedGuests}
          //     relatedGuests={relatedGuests}
          //     showHelpModal={handleClickShowHelp}
          //   />
          // </ModalContent>
        )}

        {!showSelectGuestsModal && (
          <ModalContent minW="340px" className="rsvp-form" top="100vh">
            <ModalCloseButton />

            <RSVPFormModal
              isOpen={showRSVPFormModal}
              onClose={() => setShowRSVPFormModal(false)}
              startOver={startOver}
              guest={guest}
              relatedGuests={relatedGuests}
              checkedGuests={checkedGuests}
              onSubmit={handleSubmitRSVPForm}
            />
          </ModalContent>
        )}
      </Modal>

      {showHelp && <RSVPHelpModal isOpen={showHelp} onClose={closeHelpModal} />}
    </Box>
  );
};

export default RSVP;

const SelectGuestContent = ({
  getCheckedGuests,
  guest,
  onClose,
  relatedGuests,
  handleClickShowHelp,
}) => {
  useEffect(() => {
    gsap.set(".select-guests", { display: "initial" });
    gsap.fromTo(
      ".select-guests",
      {
        y: "200%",
      },
      { y: "0%", duration: "0.1" }
    );
  }, []);

  return (
    <ModalContent className="select-guests" display="none">
      <ModalCloseButton />
      <SelectGuestsModal
        onClose={onClose}
        guest={guest}
        getCheckedGuests={getCheckedGuests}
        relatedGuests={relatedGuests}
        showHelpModal={handleClickShowHelp}
      />
    </ModalContent>
  );
};
