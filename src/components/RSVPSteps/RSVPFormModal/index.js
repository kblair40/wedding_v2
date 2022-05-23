import React, { useEffect, useState, useRef } from "react";
import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
  Button,
  Textarea,
  Flex,
} from "@chakra-ui/react";

import { toTitleCase } from "utils/helpers";

const RSVPFormModal = ({
  onClose,
  guest,
  relatedGuests,
  checkedGuests,
  onSubmit,
}) => {
  const [respondingGuests, setRespondingGuests] = useState([]);
  const [respondingGuestNames, setRespondingGuestNames] = useState([]);
  const [multipleRespondants, setMultipleRespondants] = useState(null);
  const [attendingNames, setAttendingNames] = useState([]);
  const [formData, setFormData] = useState(null);
  const [formComplete, setFormComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  const anythingElseRef = useRef();
  const shouldLog = useRef(true);

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
    let guestName = guest.full_name;

    let nameToPkMap = { [guestName]: guest.pk };
    let respondants = [guest];
    if (checkedGuests && checkedGuests.length) {
      for (let idx of checkedGuests) {
        let guest = relatedGuests[idx];
        respondants.push(guest);
        nameToPkMap[guest.full_name] = guest.pk;
      }
      console.log("\n\n\n\n\nNAME TO PK MAP:", nameToPkMap, "\n\n\n\n\n");
    }
    // console.log("RESPONDING GUESTS:", respondants);
    setRespondingGuests(respondants);

    let guestNames = respondants.map((r) => r.full_name);

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

      for (let i = 0; i < guestNames.length; i++) {
        let name = guestNames[i].toLowerCase();

        let guestObj = respondants.find((r) => r.full_name === name);
        console.log("GUEST OBJ:", guestObj);

        blankDataObjects[name] = { ...blankFormData, pk: guestObj.pk };
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
    setLoading(true);

    let res = await onSubmit(
      {
        ...formData,
        special_requests: anythingElseRef.current.value,
      },
      respondingGuests
    );

    setLoading(false);

    console.log("\n\nSUBMIT RES:", res);
  };

  const labelStyles = {
    fontWeight: 600,
    whiteSpace: "nowrap",
    mb: "4px",
    borderBottom: "1px solid #2d2d2d",
    fontSize: "15px",
    w: "min-content",
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

      <ModalBody>
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
                      <Text fontWeight="600" mb="4px">
                        {toTitleCase(name)}
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
                  `${guest.full_name}`,
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
                    <Text fontWeight="600" mb="4px">
                      {toTitleCase(name)}
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
                    position="relative"
                    bottom={{ sm: "4px" }}
                    placeholder="Any allergies? (optional)"
                    _placeholder={{
                      color: "text.tertiary",
                    }}
                    h={{ base: "32px", sm: "28px" }}
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
          <FormLabel {...labelStyles} borderBottom="none">
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

      <ModalFooter>
        <Button variant="ghost" onClick={onClose} mr="16px">
          Cancel
        </Button>
        <Button
          variant="main_filled"
          fontWeight="600"
          onClick={sendFormData}
          isLoading={loading}
        >
          Submit
        </Button>
      </ModalFooter>
    </React.Fragment>
  );
};

export default RSVPFormModal;
