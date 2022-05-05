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
  isOpen,
  onClose,
  guest,
  relatedGuests,
  checkedGuests,
  handleSubmit,
  startOver,
}) => {
  const [respondingGuests, setRespondingGuests] = useState([]);
  const [respondingGuestNames, setRespondingGuestNames] = useState([]);
  const [multipleRespondants, setMultipleRespondants] = useState(null);
  const [attendingNames, setAttendingNames] = useState([]);
  const [formData, setFormData] = useState(null);
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const anythingElseRef = useRef();

  const formatName = (fn, ln) => {
    return `${fn} ${ln}`;
  };

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
    let res = await handleSubmit(
      {
        ...formData,
        special_requests: anythingElseRef.current.value,
      },
      respondingGuests
    );

    // if (res) {
    //   setModalIsOpen(true);
    // }
  };

  const handleCloseModal = () => {
    // setModalIsOpen(false);
    // startOver();
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
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="lg">
      <ModalOverlay />

      <ModalContent minW="340px">
        <ModalCloseButton />
        <ModalHeader>
          <Text color="text.secondary" fontSize="lg">
            Replying for {`${respondingGuestNames.join(", ")}`}
          </Text>
        </ModalHeader>

        <ModalBody>
          <FormControl mb="1rem">
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
                <FormLabel {...labelStyles} mb="1rem">
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
                        <Text fontWeight="700">{name}</Text>
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
              <FormControl
                w={{ base: "100%", sm: "190px" }}
                // border="1px solid green"
              >
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
                  <Flex
                    direction={{ base: "column", sm: "row" }}
                    flexWrap="wrap"
                  >
                    <Radio {...radioStyles} value="chicken">
                      Chicken
                    </Radio>
                    <Radio
                      {...radioStyles}
                      ml={{ sm: "16px" }}
                      mt={{ base: "4px", sm: 0 }}
                      value="beef"
                    >
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
                w={{ base: "100%", sm: "50%" }}
                placeholder="Any allergies? (optional)"
                _placeholder={{
                  color: "text.tertiary",
                  // border: "1px solid black",
                }}
                size="sm"
                h={{ base: "32px", sm: "26px" }}
                pl="8px"
                // py="24px"
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
            <FormControl>
              <FormLabel {...labelStyles}>
                Please select a dinner entree for each guest
              </FormLabel>

              {respondingGuestNames.map((name, i) => {
                return (
                  <HStack
                    key={i}
                    justifyContent="flex-start"
                    spacing="24px"
                    mb="16px"
                    alignItems="flex-start"
                    h="100%"
                  >
                    <RadioGroup
                      h="100%"
                      onChange={(val) =>
                        handleChangeMeal(val, name, "dinner_selection")
                      }
                      isDisabled={formData[name]["attending"] === "no"}
                    >
                      <Box>
                        <Text fontWeight="700">{name}</Text>
                        <HStack>
                          <Radio {...radioStyles} value="chicken">
                            Chicken
                          </Radio>
                          <Radio {...radioStyles} value="beef">
                            Beef
                          </Radio>
                        </HStack>
                      </Box>
                    </RadioGroup>

                    <Box flex={1}>
                      <Text>Any allergies? (optional)</Text>
                      <Input
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
                    </Box>
                  </HStack>
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
            <Button rightIcon={<ArrowForwardIcon boxSize="20px" />}>
              Next
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RSVPFormModal;
