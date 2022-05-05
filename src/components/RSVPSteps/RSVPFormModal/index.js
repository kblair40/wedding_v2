import React, { useEffect, useState, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
  Divider,
  Button,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const RSVPFormModal = ({
  onClose,
  guest,
  relatedGuests,
  checkedGuests,
  onSubmit,
  isOpen,
  startOver,
}) => {
  const [respondingGuests, setRespondingGuests] = useState([]);
  const [respondingGuestNames, setRespondingGuestNames] = useState([]);
  const [multipleRespondants, setMultipleRespondants] = useState(null);
  const [attendingNames, setAttendingNames] = useState([]);
  const [formData, setFormData] = useState(null);
  const [formComplete, setFormComplete] = useState(false);
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const anythingElseRef = useRef();
  const shouldLog = useRef(true);

  const formatName = (fn, ln) => {
    return `${fn} ${ln}`;
  };

  useEffect(() => {
    if (!shouldLog.current) return;
    console.log("\n\n\n\nFORM DATA:", formData);

    for (let guest in formData) {
      console.log("GUEST - CHECK FOR COMPLETION:", guest);

      const { dinner_selection, attending } = formData[guest];
      console.log("attending? ", attending);
      console.log("dinner_selection? ", dinner_selection);

      if (attending === undefined) {
        console.log("INCOMPLETE1");
        setFormComplete(false);
        return;
      } else if (attending === "yes") {
        if (!dinner_selection) {
          console.log("INCOMPLETE2");
          setFormComplete(false);
          return;
        }
      }
    }

    console.log("COMPLETE");
    setFormComplete(true);
  }, [formData]);

  useEffect(() => {
    if (!guest) return;

    let respondants = [guest];
    if (checkedGuests && checkedGuests.length) {
      for (let idx of checkedGuests) {
        respondants.push(relatedGuests[idx]);
      }
    }
    // console.log("RESPONDING GUESTS:", respondants);
    setRespondingGuests(respondants);

    let guestNames = respondants.map((respondant) =>
      formatName(respondant.first_name, respondant.last_name)
    );

    setRespondingGuestNames(guestNames);
    let multipleRespondants = respondants.length > 1;
    setMultipleRespondants(multipleRespondants);
    const blankFormData = {
      attending: undefined,
      dinner_selection: "",
      dinner_selection_notes: "",
    };

    if (multipleRespondants) {
      let blankDataObjects = {};

      for (let name of guestNames) {
        blankDataObjects[name] = blankFormData;
      }

      // console.log("\n\nBLANK OBJECTS:", blankDataObjects);
      setFormData(blankDataObjects);
    } else {
      setFormData({ [guestNames[0]]: blankFormData });
    }
  }, [relatedGuests, checkedGuests]);

  const handleChangeAttendance = (val, name) => {
    // console.log("CHANGE ATTENDANCE:", { val, name });
    setFormData({
      ...formData,
      [name]: { ...formData[name], attending: val },
    });

    if (val === "yes") {
      if (!attendingNames.includes(name)) {
        setAttendingNames([...attendingNames, name]);
      }
    } else if (val === "no") {
      if (attendingNames.includes(name)) {
        setAttendingNames([...attendingNames].filter((n) => n !== name));
      }
    }
  };

  const handleChangeMeal = (val, name, field) => {
    setFormData({
      ...formData,
      [name]: { ...formData[name], [field]: val },
    });
  };

  const sendFormData = async () => {
    shouldLog.current = false;
    let res = await onSubmit(
      {
        ...formData,
        special_requests: anythingElseRef.current.value,
      },
      respondingGuests
    );

    console.log("\n\nSUBMIT RES:", res);
  };

  const labelStyles = {
    fontWeight: 600,
    whiteSpace: "nowrap",
    mb: "4px",
  };
  const radioStyles = {
    borderColor: "text.tertiary",
  };

  return (
    <React.Fragment>
      <ModalHeader maxW="calc(100% - 48px)">
        <Text color="text.secondary" fontSize="lg">
          Replying for {`${respondingGuestNames.join(", ")}`}
        </Text>
      </ModalHeader>

      <ModalBody
      // overflowY="auto"
      // overflowY="scroll"
      >
        <FormControl mb={multipleRespondants ? "2rem" : "1rem"}>
          {!multipleRespondants ? (
            <React.Fragment>
              <FormLabel {...labelStyles}>Can you make it?</FormLabel>

              <RadioGroup
                onChange={(val) =>
                  handleChangeAttendance(val, respondingGuestNames[0])
                }
              >
                <HStack spacing="16px" flexWrap="wrap">
                  <Radio {...radioStyles} value="yes">
                    I'll be there!
                  </Radio>
                  <Radio {...radioStyles} value="no">
                    Regretfully decline
                  </Radio>
                </HStack>
              </RadioGroup>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <FormLabel {...labelStyles} mb=".5rem">
                Please let us know who can and cannot make it
              </FormLabel>
              {respondingGuestNames.map((name, i) => {
                return (
                  <RadioGroup
                    key={i}
                    mb="16px"
                    onChange={(val) => handleChangeAttendance(val, name)}
                  >
                    <Box>
                      <Text fontWeight="700" mb="4px">
                        {name}
                      </Text>
                      <HStack spacing="16px">
                        <Radio {...radioStyles} value="yes">
                          I'll be there!
                        </Radio>
                        <Radio {...radioStyles} value="no">
                          Regretfully decline
                        </Radio>
                      </HStack>
                    </Box>
                  </RadioGroup>
                );
              })}
            </React.Fragment>
          )}
        </FormControl>

        {!multipleRespondants ? (
          <Flex
            alignItems={{ sm: "flex-end" }}
            flexDirection={{ base: "column", sm: "row" }}
            mb="1rem"
          >
            <FormControl w={{ base: "100%", sm: "190px" }}>
              <FormLabel {...labelStyles}>
                Please select a dinner entree
              </FormLabel>

              <RadioGroup
                onChange={(val) =>
                  handleChangeMeal(
                    val,
                    respondingGuestNames[0],
                    "dinner_selection"
                  )
                }
              >
                <Flex direction={{ base: "column", sm: "row" }} flexWrap="wrap">
                  <Radio {...radioStyles} value="chicken">
                    Chicken
                  </Radio>
                  <Radio {...radioStyles} ml={{ sm: "16px" }} value="beef">
                    Beef
                  </Radio>
                </Flex>
              </RadioGroup>
            </FormControl>

            <Input
              mt={{ base: "8px", sm: 0 }}
              borderColor="text.tertiary"
              _hover={{ borderColor: "text.tertiary" }}
              focusBorderColor="text.secondary"
              w={{ base: "50%", sm: "100%" }}
              placeholder="Any allergies? (optional)"
              _placeholder={{
                color: "text.tertiary",
              }}
              size="sm"
              h={{ base: "32px", sm: "26px" }}
              pl="8px"
              onChange={(e) =>
                handleChangeMeal(
                  e.target.value,
                  `${guest.first_name} ${guest.last_name}`,
                  "dinner_selection_notes"
                )
              }
            />
          </Flex>
        ) : (
          <FormControl mb="2rem">
            <FormLabel {...labelStyles} mb=".5rem">
              Please select a dinner entree for each guest
            </FormLabel>

            {respondingGuestNames.map((name, i) => {
              return (
                <Flex
                  key={i}
                  spacing="24px"
                  mb="16px"
                  flexDirection={{ base: "column", sm: "row" }}
                  alignItems={{ base: "flex-start", sm: "flex-end" }}
                >
                  <RadioGroup
                    mr={{ base: "0px", sm: "16px" }}
                    onChange={(val) =>
                      handleChangeMeal(val, name, "dinner_selection")
                    }
                    isDisabled={formData[name]["attending"] === "no"}
                  >
                    <Text fontWeight="700" mb="4px">
                      {name}
                    </Text>
                    <HStack mb="4px">
                      <Radio {...radioStyles} value="chicken">
                        Chicken
                      </Radio>
                      <Radio {...radioStyles} value="beef">
                        Beef
                      </Radio>
                    </HStack>
                  </RadioGroup>

                  <Input
                    placeholder="Any allergies? (optional)"
                    _placeholder={{
                      color: "text.tertiary",
                    }}
                    h={{ base: "32px", sm: "26px" }}
                    pl="8px"
                    borderColor="text.tertiary"
                    focusBorderColor="text.secondary"
                    _hover={{ borderColor: "text.tertiary" }}
                    size="sm"
                    fontSize="md"
                    onChange={(e) =>
                      handleChangeMeal(
                        e.target.value,
                        name,
                        "dinner_selection_notes"
                      )
                    }
                  />
                </Flex>
              );
            })}
          </FormControl>
        )}

        <FormControl>
          <FormLabel {...labelStyles}>
            Anything else we should know? (optional)
          </FormLabel>
          <Textarea
            size="sm"
            borderColor="text.tertiary"
            _hover={{ borderColor: "text.tertiary" }}
            focusBorderColor="text.secondary"
            ref={anythingElseRef}
          />
        </FormControl>
      </ModalBody>

      <ModalFooter justifyContent="space-between">
        <Button
          position="relative"
          px="8px"
          right="8px"
          leftIcon={
            <ArrowForwardIcon
              boxSize="20px"
              style={{
                transform: "rotate(180deg)",
              }}
            />
          }
          variant="ghost"
        >
          Back
        </Button>

        <Flex>
          <Button variant="ghost" onClick={onClose} mr="16px">
            Cancel
          </Button>
          <Button onClick={sendFormData} isDisabled={!formComplete}>
            Submit
          </Button>
        </Flex>
      </ModalFooter>
    </React.Fragment>
  );
};

export default RSVPFormModal;
