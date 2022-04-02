import React, { useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";

import CodeInput from "components/Auth/CodeInput";
import WelcomeModal from "components/Auth/WelcomeModal";

const Auth = ({ getGuest }) => {
  const [guest, setGuest] = useState(null);

  const { isOpen: codeInputIsOpen, onClose: onCloseCodeInput } = useDisclosure({
    defaultIsOpen: true,
  });
  const {
    isOpen: WelcomeModalIsOpen,
    onClose: onCloseWelcomeModal,
    onOpen: onOpenWelcomeModal,
  } = useDisclosure();

  const handleCloseCodeInput = (guest) => {
    if (guest) {
      setGuest(guest);
      onOpenWelcomeModal();
    }
    onCloseCodeInput();
  };

  return (
    <Box>
      <CodeInput
        getGuest={getGuest}
        isOpen={codeInputIsOpen && !WelcomeModalIsOpen}
        onClose={handleCloseCodeInput}
      />

      {WelcomeModalIsOpen && (
        <WelcomeModal
          guest={guest}
          isOpen={WelcomeModalIsOpen}
          onClose={onCloseWelcomeModal}
        />
      )}
    </Box>
  );
};

export default Auth;
