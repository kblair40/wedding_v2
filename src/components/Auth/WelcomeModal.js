import React, { useEffect, useState } from "react";
import {
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Center,
  Spinner,
} from "@chakra-ui/react";

import RSVPForm from "components/RSVPForm";
import { getRelatedGuests } from "api/api";
import useUserContext from "hooks/useUserContext";

const WelcomeModal = ({ isOpen, onClose, guest }) => {
  console.log("\n\nGUEST:", guest);
  const [loading, setLoading] = useState(false);
  const [relatedGuests, setRelatedGuests] = useState(null);
  const [checkedGuests, setCheckedGuests] = useState([]);

  const { user } = useUserContext();

  // console.log("\n\nUSER:", user, "\n\n");

  useEffect(() => {
    const getOtherGuests = async () => {
      if (guest && (guest.significant_other || guest.other_family)) {
        setLoading(true);
        let others = [];
        if (guest.significant_other) {
          others.push(guest.significant_other);
        }
        if (guest.other_family) {
          let otherFamily = guest.other_family.split(",");
          // remove any whitespace from start or end of each name
          otherFamily = otherFamily.map((member) => member.trim());
          others = [...others, ...otherFamily];
        }

        if (others.length) {
          const response = await getRelatedGuests(others);
          console.log("\nRESPONSE:", response);

          if (response.length) {
            setRelatedGuests(response);
          } else {
            setRelatedGuests([]);
          }
        }

        setLoading(false);
      } else {
        setRelatedGuests([]);
      }
    };

    getOtherGuests();
  }, [guest]);

  const handleChangeRespondingGuests = (i) => {
    if (checkedGuests.includes(i)) {
      setCheckedGuests(checkedGuests.filter((idx) => idx !== i));
    } else {
      setCheckedGuests([...checkedGuests, i]);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent minH="300px">
        {guest && !loading && relatedGuests !== null ? (
          <React.Fragment>
            <ModalHeader>
              Welcome, {`${guest.first_name} ${guest.last_name}`}!
            </ModalHeader>

            <ModalBody>
              <RSVPForm
                guest={guest}
                relatedGuests={relatedGuests}
                checkedGuests={checkedGuests}
                handleChangeRespondingGuests={handleChangeRespondingGuests}
              />
            </ModalBody>
          </React.Fragment>
        ) : (
          <Center>
            <Spinner />
          </Center>
        )}

        <ModalFooter>
          <Button>Next</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WelcomeModal;
