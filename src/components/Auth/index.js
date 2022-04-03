import React, { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Transition, TransitionGroup } from "react-transition-group";

import useUserContext from "hooks/useUserContext";
import CodeInputForm from "components/Auth/CodeInputForm";
import SelectGuestsForm from "components/Auth/SelectGuestsForm";
import SlideWrapper from "components/Auth/SlideWrapper";
import RSVPForm from "components/Auth/RSVPForm";

const Auth = ({ getGuest }) => {
  const [guest, setGuest] = useState(null);
  // code_input -> select_guests -> rsvp_form -> done
  const [step, setStep] = useState("code_input");
  const [relatedGuests, setRelatedGuests] = useState(null);
  const [checkedGuests, setCheckedGuests] = useState([]);
  // const [respondin]

  const { handleAuthenticated } = useUserContext();

  const handleFinishCodeInput = (guestObject) => {
    setStep("select_guests");
    setGuest(guestObject);
    handleAuthenticated(guestObject);
  };

  const handleChangeRespondingGuests = (i) => {
    if (checkedGuests.includes(i)) {
      setCheckedGuests(checkedGuests.filter((idx) => idx !== i));
    } else {
      setCheckedGuests([...checkedGuests, i]);
    }
  };

  const transitionStyle = {
    exit: { left: "-100%", top: "50%" },
    enter: { left: "50%", top: "50%" },
  };

  return (
    <React.Fragment>
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
            <SelectGuestsForm
              guest={guest}
              relatedGuests={relatedGuests}
              setRelatedGuests={setRelatedGuests}
              handleChangeRespondingGuests={handleChangeRespondingGuests}
            />
            <Footer
              handleClickNext={() => {
                console.log("STEP:", step);
                setStep("rsvp_form");
              }}
            />
          </SlideWrapper>
        </Transition>

        <Transition
          in={step === "rsvp_form"}
          timeout={300}
          component={null}
          unmountOnExit
        >
          <SlideWrapper
            style={transitionStyle[step === "rsvp_form" ? "enter" : "exit"]}
          >
            {step === "rsvp_form" && (
              <RSVPForm
                guest={guest}
                relatedGuests={relatedGuests}
                checkedGuests={checkedGuests}
              />
            )}
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
    <HStack justifyContent="flex-end" p="0 12px 4px">
      <Button onClick={handleClickNext} rightIcon={<ArrowForwardIcon />}>
        Next
      </Button>
    </HStack>
  );
};
