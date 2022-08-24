import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Modal,
  useToast,
  Image,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import useLocalstorageState from "@rooks/use-localstorage-state";
// import useLocalStorageState from "hooks/useLocalStorageState";

import { glass } from "utils/styles";
import { patchGuest } from "api/api";
// import RSVPForm from "components/RSVPSteps/RSVPForm";
import GuestSearch from "components/RSVPSteps_old/GuestSearch";
// import SelectGuests from "components/RSVPSteps/SelectGuests";
import SelectGuestsModal from "components/RSVPSteps_old/SelectGuestsModal";
import RSVPHelpModal from "components/RSVPSteps_old/RSVPHelpModal";
import RSVPFormModal from "components/RSVPSteps_old/RSVPFormModal";
import SectionLabel from "components/SectionLabel";
import AlreadyRepliedAlert from "./AlreadyRepliedAlert";
import { CustomToast } from "components/RSVPSteps_old/RSVPHelpModal";

import casa_new from "assets/casa_new.jpg";

import "./index.css";

const RSVP = ({ setInView }) => {
  const [guest, setGuest] = useState();
  const [relatedGuests, setRelatedGuests] = useState();
  const [checkedGuests, setCheckedGuests] = useState();
  const [showHelp, setShowHelp] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showSelectGuestsModal, setShowSelectGuestsModal] = useState(false);
  const [showRSVPFormModal, setShowRSVPFormModal] = useState(false);

  const [hasReplied, setHasReplied] = useLocalstorageState("hasReplied", false);

  const toast = useToast();

  const helpOpenedBy = useRef("");

  const [inViewRef, inView] = useInView({ threshold: 0.01 });

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
    setSearchInput("");
  };

  const getCheckedGuests = (guestIndexes) => {
    setCheckedGuests(guestIndexes);

    setShowRSVPFormModal(true);
  };

  const formatNames = (names) => {
    if (!names || !names.length) return;

    names = names.map((name) => name.split(" ")[0]);

    if (names.length === 1) {
      return `${names[0]}`;
    } else if (names.length === 2) {
      return `${names[0]} & ${names[1]}`;
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} & ${names[2]}`;
    } else if (names.length === 4) {
      return `${names[0]}, ${names[1]}, ${names[2]} & ${names[3]}`;
    }
  };

  const handleSubmitRSVPForm = async (data, respondingGuests) => {
    // console.log("\n\nDATA:", data, "\n\n", { respondingGuests });
    let names = Object.keys(data).filter((name) => name !== "special_requests");
    // console.log("\n\nNAMES:", names);

    for (let name of names) {
      let [fn, ln] = name.split(" ");

      let guest = respondingGuests.find((g) => {
        return g.first_name === fn && g.last_name === ln;
      });
      // console.log("\nGUEST:", guest);

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
        // console.log("RES:", res);
      } catch (e) {
        console.error(`\n\n\nFAILED PATCHING ${guestData}:`, e, "\n\n\n");
      }
    }

    if (searchInput) {
      setSearchInput("");
    }

    toast({
      duration: 7000,
      isClosable: true,
      render: () => (
        <CustomToast
          title={`${formatNames(names)}, thanks for replying!`}
          // description={message}
          isAttending={true}
        />
      ),
    });

    setShowRSVPFormModal(false);
    setHasReplied(true);
    return true;
  };

  const closeHelpModal = () => {
    setShowHelp(false);

    helpOpenedBy.current = "";
  };

  const handleClickShowHelp = () => {
    // console.log("SHOW HELP");
    setShowSelectGuestsModal(false);

    setTimeout(() => {
      setShowHelp(true);
      setSearchInput("");
    }, 100);
  };

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      // bg="#f7f5f1"
      w="100%"
      pb="24px"
      px="24px"
    >
      <Image
        src={casa_new}
        w="100%"
        minW="900px"
        zIndex="-1"
        position="absolute"
      />
      <Flex
        mt="24px"
        p={{ base: "16px" }}
        shadow="md"
        justifyContent={{ base: "center" }}
        maxW={{ base: "350px", sm: "450px", md: "600px" }}
        flexDirection="column"
        alignItems="center"
        w="100%"
        {...glass}
      >
        <SectionLabel label="rsvp" />
        {/* {hasReplied && <Text textAlign="center">THANKS FOR REPLYING</Text>} */}

        <Box ref={inViewRef} />

        {hasReplied && (
          <Flex w="100%" justifyContent="center">
            <AlreadyRepliedAlert />
          </Flex>
        )}

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
                setSearchInput("");
              }}
            />
          </Box>
        </Flex>
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

      {showHelp && (
        <RSVPHelpModal
          isOpen={showHelp}
          onClose={closeHelpModal}
          setHasReplied={setHasReplied}
        />
      )}
    </Flex>
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
        // console.log("SLIDE OUT LEFT COMPLETE!");
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
