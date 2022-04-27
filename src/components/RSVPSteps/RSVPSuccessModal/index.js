import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const RSVPSuccessModal = ({ isOpen, onClose, respondingGuestNames: names }) => {
  const [nameString, setNameString] = useState("");

  useEffect(() => {
    console.log("\n\n\n");
    console.log({ names });
    console.log("\n\n\n");

    if (names.length === 1) {
      setNameString(`${names[0]}, `);
    } else {
      let firstNames = [],
        lastNames = [];
      names.forEach((name) => {
        let [fn, ln] = name.split(" ");
        firstNames.push(fn);
        lastNames.push(ln);
      });

      let uniqueLastNameCount = getNumOfUniqueValues(lastNames);
      console.log("\n\nuniqueLastNameCount:", uniqueLastNameCount);
      if (names.length === 2) {
        if (uniqueLastNameCount === 1) {
          setNameString(
            `${firstNames[0]} & ${firstNames[1]} ${lastNames[0]}, `
          );
        } else {
          setNameString(`${names[0]} & ${names[1]}, `);
        }
      } else if (names.length === 3) {
        if (uniqueLastNameCount === 1) {
          setNameString(
            `${firstNames[0]}, ${firstNames[1]} & ${firstNames[2]} ${lastNames[0]}, `
          );
        } else {
          setNameString(`${names[0]}, ${names[1]} & ${names[2]}, `);
        }
      } else {
        if (uniqueLastNameCount === 1) {
          let firstThree =
            firstNames.slice(0, 3).join(", ") +
            ` & ${firstNames[3]} ${lastNames[0]}, `;
          setNameString(firstThree);
          // setNameString(
          //   `${firstNames[0]}, ${firstNames[1]} & ${firstNames[2]} ${lastNames[0]}, `
          // );
        } else {
          setNameString(
            `${names[0]}, ${names[1]}, ${names[2]} & ${names[3]}, `
          );
        }
      }
    }
  }, [names]);

  const getNumOfUniqueValues = (values) => {
    let found = [];
    for (let val of values) {
      if (!found.includes(val)) {
        found.push(val);
      }
    }

    return found.length;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={{ base: "320px", sm: "440px" }}>
        <ModalHeader
          fontSize={{ base: "lg", sm: "xl" }}
          fontWeight="500"
        >{`${nameString} thank you for replying!`}</ModalHeader>
        <ModalBody fontSize={{ base: "sm", sm: "15px" }}>
          You can change your responses at any time up until Sept 1st, 2022.
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RSVPSuccessModal;
