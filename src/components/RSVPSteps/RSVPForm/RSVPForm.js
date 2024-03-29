import React, { useEffect, useState, useRef } from "react";
import {
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

import RSVPSuccessModal from "components/RSVPSteps_old/RSVPSuccessModal";

const RSVPForm = ({
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

    if (res) {
      setModalIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    startOver();
    // navigate("/");
  };

  return (
    <Box maxW="580px" borderRadius="4px" p="8px">
      <Box mb="16px" px="16px" py="16px" maxH="100%">
        {respondingGuests && respondingGuests.length > 1 && (
          <React.Fragment>
            <Text color="text.secondary">
              Replying for {`${respondingGuestNames.join(", ")}`}
            </Text>
            <Divider my="16px" />
          </React.Fragment>
        )}

        <Box overflowY="hidden" flex={1}>
          <FormControl>
            {!multipleRespondants ? (
              <React.Fragment>
                <FormLabel fontWeight="500">Can you make it?</FormLabel>

                <RadioGroup
                  onChange={(val) =>
                    handleChangeAttendance(val, respondingGuestNames[0])
                  }
                >
                  <HStack spacing="16px" flexWrap="wrap">
                    <Radio value="yes">I'll be there!</Radio>
                    <Radio value="no">Regretfully decline</Radio>
                  </HStack>
                </RadioGroup>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <FormLabel fontWeight="500" mb="1rem">
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
                          <Radio value="yes">I'll be there!</Radio>
                          <Radio value="no">Regretfully decline</Radio>
                        </HStack>
                      </Box>
                    </RadioGroup>
                  );
                })}
              </React.Fragment>
            )}
          </FormControl>

          <Divider my="16px" />

          {!multipleRespondants ? (
            <Flex
              alignItems={{ sm: "flex-end" }}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <FormControl w="50%">
                <FormLabel fontWeight="500" whiteSpace="nowrap">
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
                    <Radio value="chicken">Chicken</Radio>
                    <Radio
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
                mt={{ base: "4px", sm: 0 }}
                position="relative"
                top="2px"
                focusBorderColor="text.tertiary"
                w={{ base: "100%", sm: "50%" }}
                placeholder="Any allergies? (optional)"
                _placeholder={{ color: "text.tertiary" }}
                size="sm"
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
              <FormLabel fontWeight="500">
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
                          <Radio value="chicken">Chicken</Radio>
                          <Radio value="beef">Beef</Radio>
                        </HStack>
                      </Box>
                    </RadioGroup>

                    <Box flex={1}>
                      <Text>Any allergies? (optional)</Text>
                      <Input
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

          <Divider my="12px" />

          <FormControl>
            <FormLabel>Anything else we should know? (optional)</FormLabel>
            <Textarea focusBorderColor="text.tertiary" ref={anythingElseRef} />
          </FormControl>
        </Box>

        <HStack pt="16px" pb="8px" justifyContent="flex-end">
          <Button onClick={startOver} zIndex={1} variant="ghost">
            Reset
          </Button>

          <Button onClick={sendFormData}>Submit</Button>
        </HStack>
      </Box>
      <RSVPSuccessModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        respondingGuestNames={respondingGuestNames}
      />
    </Box>
  );
};

export default RSVPForm;
