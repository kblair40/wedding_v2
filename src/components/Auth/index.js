import React, { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Transition, TransitionGroup } from "react-transition-group";

import useUserContext from "hooks/useUserContext";
import CodeInputForm from "components/Auth/CodeInputForm";
import SelectGuestsForm from "components/Auth/SelectGuestsForm";
import SlideWrapper from "components/Auth/SlideWrapper";

const Auth = ({ getGuest }) => {
  const [guest, setGuest] = useState(null);
  // code_input -> select_guests -> rsvp_form
  const [step, setStep] = useState("code_input");

  const { handleAuthenticated } = useUserContext();

  const handleFinishCodeInput = (guestObject) => {
    setStep("select_guests");
    setGuest(guestObject);
    handleAuthenticated(guestObject);
  };

  const getButton = () => {
    return (
      <Button
        onClick={() => {
          if (!step) {
            setStep("code_input");
          } else if (step === "code_input") {
            setStep("select_guests");
          } else if (step === "select_guests") {
            setStep("code_input");
          }
        }}
        position="fixed"
        top="1rem"
        left="1rem"
      >
        {step === "code_input"
          ? "Select Guests"
          : step === "select_guests"
          ? "RSVP Form"
          : "Code Input"}
      </Button>
    );
  };

  const transitionStyle = {
    exit: { left: "-100%", top: "50%" },
    enter: { left: "50%", top: "50%" },
  };

  return (
    <React.Fragment>
      {/* {getButton()} */}

      <TransitionGroup commponent={null}>
        <Transition in={step === "code_input"} timeout={300}>
          <SlideWrapper
            style={transitionStyle[step === "code_input" ? "enter" : "exit"]}
          >
            <CodeInputForm
              getGuest={getGuest}
              handleFinishCodeInput={handleFinishCodeInput}
            />
          </SlideWrapper>
        </Transition>

        <Transition in={step === "select_guests"} timeout={300}>
          <SlideWrapper
            style={transitionStyle[step === "select_guests" ? "enter" : "exit"]}
          >
            <SelectGuestsForm guest={guest} />
            <Footer handleClickNext={() => setStep("rsvp_form")} />
          </SlideWrapper>
        </Transition>

        <Transition in={step === "rsvp_form"} timeout={300}>
          <SlideWrapper
            style={transitionStyle[step === "rsvp_form" ? "enter" : "exit"]}
          >
            <SelectGuestsForm guest={guest} />
            <Footer handleClickNext={() => setStep("done")} />
          </SlideWrapper>
        </Transition>
      </TransitionGroup>
    </React.Fragment>
  );
};

export default Auth;

const Footer = ({ handleClickNext }) => {
  return (
    <HStack justifyContent="flex-end" p="0 8px 4px">
      <Button onClick={handleClickNext} rightIcon={<ArrowForwardIcon />}>
        Next
      </Button>
    </HStack>
  );
};
