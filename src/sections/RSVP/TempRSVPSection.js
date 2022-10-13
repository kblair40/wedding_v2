import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import useLocalstorageState from "@rooks/use-localstorage-state";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import api from "apimongo";

import { glass } from "utils/styles";
import SectionLabel from "components/SectionLabel";
import casa_new from "assets/images/casa/casa_new.webp";
import casa_new_sm from "assets/images/casa/casa_new_sm.webp";
import GuestSearch from "./RSVPSteps/GuestSearch";
import RSVPForm from "./RSVPSteps/RSVPForm";

const TempRSVPSection = ({ setInView }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  const [selectedResult, setSelectedResult] = useState();
  const [guestNames, setGuestNames] = useState();
  const [step, setStep] = useState(1);

  const [hasReplied, setHasReplied] = useLocalstorageState("hasReplied", false);

  const bgImage = useBreakpointValue({ base: casa_new_sm, xs: casa_new });

  const searchRef = useRef();
  const formRef = useRef();
  const successRef = useRef();

  useEffect(() => {
    if (inView) {
      setInView("rsvp");
    }
  }, [inView]);

  useEffect(() => {
    if (selectedResult) {
      setStep(2);
      setGuestNames(selectedResult.invited_names.split(", "));
      gsap.to(searchRef.current, {
        opacity: 0,
        duration: 0.01,
        onComplete: () => {
          console.log("FADE OUT COMPLETE!");
          searchRef.current.style.display = "none";
        },
      });

      formRef.current.style.display = "block";
      gsap.to(formRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    }
  }, [selectedResult]);

  const handleSubmitRSVPForm = async (data, special_requests) => {
    console.log("DATA:", data, "\n");
    const attending_names = [];
    const not_attending_names = [];
    for (let guest in data) {
      console.log("DATA[GUEST]:", data[guest]);
      if (data[guest].attending === "yes") attending_names.push(guest);
      else not_attending_names.push(guest);
    }

    // console.log("ATTENDING:", attending_names);
    // console.log("NOT ATTENDING:", not_attending_names);

    const reply_method = "website";

    try {
      const response = await api.patch(`/invite/${selectedResult._id}`, {
        attending_names,
        not_attending_names,
        special_requests,
        reply_method,
      });

      // console.log("RESPONSE:", response.data);
      if (response.data && response.data.msg) {
        const { msg } = response.data;
        if (msg === "success") {
          gsap.to(formRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              console.log("FADE OUT COMPLETE!");
              setStep(3);
              formRef.current.style.display = "none";
            },
          });

          successRef.current.style.display = "block";
          gsap.to(successRef.current, {
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
          });
        }
      }
    } catch (e) {
      console.log("FAILURE!", e);
      return false;
    }

    setHasReplied(true);
    return true;
  };

  const restart = () => {
    setStep(1);
    setSelectedResult(undefined);
    setGuestNames(undefined);
    setHasReplied(false);

    gsap.to(successRef.current, {
      opacity: 0,
      duration: 0.5,

      onComplete: () => (successRef.current.style.display = "none"),
    });

    searchRef.current.style.display = "block";
    gsap.to(searchRef.current, {
      opacity: 1,
      duration: 0.5,
      delay: 0.25,
    });
  };

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

        <Box ref={inViewRef} />

        <Flex
          w="100%"
          justifyContent="center"
          position="relative"
          transition="height 0.3s"
          alignItems="center"
          h={
            selectedResult && step !== 3
              ? "auto"
              : { base: "200px", sm: "176px", md: "154px" }
          }
        >
          <Box ref={searchRef} position="absolute" h="100%" w="100%">
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

          <Box position="absolute" ref={successRef} display="none" opacity={0}>
            <RSVPSuccess restart={restart} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TempRSVPSection;

const RSVPSuccess = ({ restart }) => {
  return (
    <Flex w="100%" h="100%" direction="column" align="center">
      <Text textAlign="center" fontSize="xl" fontWeight="600">
        RSVP received, thank you!
      </Text>
      <Text textAlign="center" mt="1rem">
        Hit the restart button below if you need to change anything
      </Text>

      <Button mt="1rem" w="50%" mx="auto" onClick={restart}>
        Restart
      </Button>
    </Flex>
  );
};

//
//
// BACKUP
// import React, { useEffect } from "react";
// import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
// import { useInView } from "react-intersection-observer";

// import { glass } from "utils/styles";
// import SectionLabel from "components/SectionLabel";
// import casa_new from "assets/images/casa/casa_new.webp";
// import casa_new_sm from "assets/images/casa/casa_new_sm.webp"

// const TempRSVPSection = ({ setInView }) => {
//   const [inViewRef, inView] = useInView({ threshold: 0.01 });

//   useEffect(() => {
//     if (inView) {
//       setInView("rsvp");
//     }
//   }, [inView]);

//   const bgImage = useBreakpointValue({ base: casa_new_sm, xs: casa_new });

//   return (
//     <Flex
//       justifyContent="center"
//       flexDirection="column"
//       alignItems="center"
//       w="100%"
//       pb="24px"
//       px="24px"
//       minW="350px"
//     >
//       <Image
//         src={bgImage}
//         w="100%"
//         minW="900px"
//         zIndex="-1"
//         position="absolute"
//         loading="lazy"
//       />
//       <Flex
//         mt="24px"
//         p={{ base: "16px" }}
//         shadow="md"
//         justifyContent={{ base: "center" }}
//         maxW={{ base: "350px", sm: "450px", md: "600px" }}
//         flexDirection="column"
//         alignItems="center"
//         w="100%"
//         {...glass}
//       >
//         <SectionLabel label="rsvp" />

//         <Box ref={inViewRef} />

//         <Flex w="100%" justifyContent="center">
//           <Box
//             minW="340px"
//             maxW={{
//               base: "420px",
//               sm: "524px", // allows full placeholder text to show
//               md: "720px",
//               lg: "900px",
//             }}
//             px="24px"
//           >
//             <Text textAlign="center" mb="4px" fontWeight="500">
//               Check back soon!
//             </Text>
//             <Text textAlign="center" mb="16px">
//               When invites go out, you'll be able to RSVP right here.
//             </Text>
//           </Box>
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };

// export default TempRSVPSection;
