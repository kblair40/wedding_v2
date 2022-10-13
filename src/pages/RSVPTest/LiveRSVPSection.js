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

import { glass } from "utils/styles";
import SectionLabel from "components/SectionLabel";
import casa_new from "assets/images/casa/casa_new.webp";
import casa_new_sm from "assets/images/casa/casa_new_sm.webp";
import GuestSearch from "./RSVPSteps/GuestSearch";

// import SelectGuestsModal from "./RSVPSteps/SelectGuestsModal";
// import RSVPHelpModal from "./RSVPSteps/RSVPHelpModal";
// import RSVPFormModal from "./RSVPSteps/RSVPFormModal";
// import AlreadyRepliedAlert from "./AlreadyRepliedAlert";
// import { CustomToast } from "./RSVPSteps/RSVPHelpModal";

const LiveRSVPSection = () => {
  const [guest, setGuest] = useState();
  const [relatedGuests, setRelatedGuests] = useState();
  const [checkedGuests, setCheckedGuests] = useState();
  const [showHelp, setShowHelp] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showSelectGuestsModal, setShowSelectGuestsModal] = useState(false);
  const [showRSVPFormModal, setShowRSVPFormModal] = useState(false);

  const [hasReplied, setHasReplied] = useLocalstorageState("hasReplied", false);
  const bgImage = useBreakpointValue({ base: casa_new_sm, xs: casa_new });

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      w="100%"
      pb="24px"
      px="24px"
      minW="350px"
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

        <Flex w="100%" justifyContent="center">
          <GuestSearch onChange={(e) => setSearchInput(e.target.value)} />
          {/* <Box
            minW="340px"
            maxW={{
              base: "420px",
              sm: "524px", // allows full placeholder text to show
              md: "720px",
              lg: "900px",
            }}
            px="24px"
          >
            <Text textAlign="center" mb="4px" fontWeight="500">
              Check back soon!
            </Text>
            <Text textAlign="center" mb="16px">
              When invites go out, you'll be able to RSVP right here.
            </Text>
          </Box> */}
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
