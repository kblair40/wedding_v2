import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  useBreakpointValue,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Modal,
} from "@chakra-ui/react";
import useLocalstorageState from "@rooks/use-localstorage-state";
import gsap from "gsap";
import api from "apimongo";

import { glass } from "utils/styles";
import SectionLabel from "components/SectionLabel";
import casa_new from "assets/images/casa/casa_new.webp";
import casa_new_sm from "assets/images/casa/casa_new_sm.webp";
import GuestSearch from "./RSVPSteps/GuestSearch";

import RSVPForm from "./RSVPSteps/RSVPForm";
// import RSVPHelpModal from "./RSVPSteps/RSVPHelpModal";
// import AlreadyRepliedAlert from "./AlreadyRepliedAlert";
// import { CustomToast } from "./RSVPSteps/RSVPHelpModal";

const LiveRSVPSection = () => {
  const [selectedResult, setSelectedResult] = useState();
  const [guestNames, setGuestNames] = useState();

  const [hasReplied, setHasReplied] = useLocalstorageState("hasReplied", false);
  const bgImage = useBreakpointValue({ base: casa_new_sm, xs: casa_new });

  const searchRef = useRef();
  const formRef = useRef();

  const handleSubmitRSVPForm = async (data, special_requests) => {
    console.log("DATA:", data, "\n");
    const attending_names = [];
    const not_attending_names = [];
    for (let guest in data) {
      console.log("DATA[GUEST]:", data[guest]);
      if (data[guest].attending === "yes") attending_names.push(guest);
      else not_attending_names.push(guest);
    }

    console.log("ATTENDING:", attending_names);
    console.log("NOT ATTENDING:", not_attending_names);

    const reply_method = "website";

    try {
      const response = await api.patch(`/invite/${selectedResult._id}`, {
        attending_names,
        not_attending_names,
        special_requests,
        reply_method,
      });

      console.log("RESPONSE:", response.data);
    } catch (e) {
      console.log("FAILURE!", e);
      return false;
    }

    setHasReplied(true);
    return true;
  };

  useEffect(() => {
    if (selectedResult) {
      setGuestNames(selectedResult.invited_names.split(", "));
      gsap.to(searchRef.current, {
        opacity: 0,
        duration: 0.5,
        // onComplete: () => console.log("FADE OUT COMPLETE!"),
        onComplete: () => {
          console.log("FADE OUT COMPLETE!");
          searchRef.current.style.display = "none";
        },
      });

      formRef.current.style.display = "block";
      gsap.to(formRef.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0.25,
      });
    }
  }, [selectedResult]);

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      w="100%"
      pb="24px"
      px="24px"
      minW="350px"
      h="100vh"
    >
      <Image
        src={bgImage}
        w="100%"
        minW="900px"
        zIndex="-1"
        position="absolute"
        loading="lazy"
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

        <Flex
          w="100%"
          justifyContent="center"
          // border="1px solid green"
          position="relative"
          h={
            selectedResult
              ? "auto"
              : { base: "200px", sm: "176px", md: "154px" }
          }
        >
          <Box
            ref={searchRef}
            position="absolute"
            h="100%"
            w="100%"
            // border="1px solid green"
          >
            <GuestSearch
              selectedResult={selectedResult}
              onSelectResult={setSelectedResult}
            />
          </Box>

          <Box ref={formRef} display="none" opacity={0}>
            <RSVPForm
              guestNames={guestNames}
              handleSubmit={handleSubmitRSVPForm}
            />
          </Box>
        </Flex>
      </Flex>

      {/* <Modal
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
      </Modal> */}
    </Flex>
  );
};

export default LiveRSVPSection;
