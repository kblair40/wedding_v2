import React, { useState, useRef, useEffect } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { patchGuest } from "api/api";
import RSVPForm from "components/RSVPSteps/RSVPForm";
import GuestSearch from "components/RSVPSteps/GuestSearch";
import SelectGuests from "components/RSVPSteps/SelectGuests";
import PageContainer from "components/containers/PageContainer";
import InviteCard from "components/containers/InviteCard";
import RSVPHelpModal from "components/RSVPSteps/RSVPHelpModal";

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

  let navigate = useNavigate();

  const helpOpenedBy = useRef("");

  const [inViewRef, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    console.log("inView:", inView);
    if (inView) {
      setInView("rsvp");
    }
  }, [inView]);

  const getSearchResults = (guest, relatedGuests) => {
    console.log("SEARCH RESULTES:", { guest, relatedGuests });
    setGuest(guest);
    if (relatedGuests) {
      setRelatedGuests(relatedGuests);
      transitionOneToTwo();
    } else {
      getCheckedGuests([]);
      transitionOneToThree();
    }
    setStep(2);
    setStep1Class("fade-out-half-second");
    setTimeout(() => {
      setStep1Class("hidden");
      setTimeout(() => {
        setStep2Class("fade-in-half-second");
      }, 50);
    }, 600);
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
    console.log("\n\nINDEXES:", guestIndexes);
    setCheckedGuests(guestIndexes);

    transitionTwoToThree();
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
  };

  const closeHelpModal = () => {
    setShowHelp(false);

    if (helpOpenedBy.current !== "GuestSearch") {
      navigate(0);
    }

    helpOpenedBy.current = "";
  };

  return (
    <Box>
      <Flex
        alignItems="center"
        direction="column"
        // border="2px solid #000"
        w="100%"
        bg="white"
        pt="32px"
        mb="24px"
      >
        <Flex direction="column" alignItems="center" mb="1.5rem">
          <Text
            fontSize={{ base: "3xl", sm: "48px" }}
            textAlign="center"
            fontWeight="500"
            w="100%"
            // mt="24px"
            letterSpacing="2px"
          >
            RSVP
          </Text>
          <Box h="3px" w="60px" bg="neutral.800" ref={inViewRef} />
        </Flex>

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
            <InviteCard>
              <Box
                className={step1Class}
                // border="1px solid red"
                mt="1.5rem"
              >
                <GuestSearch
                  getSearchResults={getSearchResults}
                  showHelp={() => {
                    helpOpenedBy.current = "GuestSearch";
                    setShowHelp(true);
                  }}
                />
              </Box>

              <Box className={step2Class}>
                <Center>
                  <SelectGuests
                    checkedGuests={checkedGuests}
                    getCheckedGuests={getCheckedGuests}
                    step={step}
                    guest={guest}
                    relatedGuests={relatedGuests}
                    showHelpModal={() => setShowHelp(true)}
                  />
                </Center>
              </Box>

              <Box className={step3Class}>
                <RSVPForm
                  step={step}
                  guest={guest}
                  relatedGuests={relatedGuests}
                  checkedGuests={checkedGuests}
                  handleSubmit={handleSubmitRSVPForm}
                />
              </Box>
            </InviteCard>
          </Box>
        </Flex>

        {showHelp && (
          <RSVPHelpModal isOpen={showHelp} onClose={closeHelpModal} />
        )}
      </Flex>
    </Box>
  );
};

export default RSVP;
