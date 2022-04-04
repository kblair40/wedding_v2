import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  VStack,
  Center,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Heading,
  Text,
  Divider,
  Button,
  Textarea,
} from "@chakra-ui/react";

const RSVPForm = ({ guest, relatedGuests, checkedGuests, handleSubmit }) => {
  console.log("\n\nRSVP FORM RCVD:", { guest, relatedGuests, checkedGuests });

  const [respondingGuests, setRespondingGuests] = useState([]);
  const [respondingGuestNames, setRespondingGuestNames] = useState([]);
  const [multipleRespondants, setMultipleRespondants] = useState(null);
  const [attendingNames, setAttendingNames] = useState([]);
  const [formData, setFormData] = useState(null);

  const anythingElseRef = useRef();

  const formatName = (fn, ln) => {
    return `${fn} ${ln}`;
  };

  useEffect(() => {
    let rgs = [guest];
    if (checkedGuests && checkedGuests.length) {
      for (let idx of checkedGuests) {
        rgs.push(relatedGuests[idx]);
      }
    }
    setRespondingGuests(rgs);

    let guestNames = rgs.map((rg) => formatName(rg.first_name, rg.last_name));
    setRespondingGuestNames(guestNames);

    let multipleRespondants = rgs.length > 1;
    setMultipleRespondants(multipleRespondants);

    const blankFormData = {
      isAttending: undefined,
      mealChoice: "",
      mealNotes: "",
    };

    if (multipleRespondants) {
      let blankDataObjects = {};
      for (let name of guestNames) {
        blankDataObjects[name] = blankFormData;
      }
      console.log("\n\nBLANK OBJECTS:", blankDataObjects);
      setFormData(blankDataObjects);
    }
  }, [relatedGuests, checkedGuests]);

  const handleChangeAttendance = (val, name) => {
    setFormData({
      ...formData,
      [name]: { ...formData[name], isAttending: val },
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

  return (
    <Box mb="16px" px="16px" py="16px" maxH="100%">
      <Text color="text.secondary">
        Replying for {`${respondingGuestNames.join(", ")}`}
      </Text>
      <Divider my="16px" />

      <Box overflowY="hidden" flex={1}>
        <FormControl>
          {!multipleRespondants ? (
            <React.Fragment>
              <FormLabel fontWeight="600">Can you make it?</FormLabel>

              <RadioGroup>
                <HStack spacing="16px" flexWrap="wrap">
                  <Radio value="yes">I'll be there!</Radio>
                  <Radio value="no">Regretfully decline</Radio>
                </HStack>
              </RadioGroup>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <FormLabel fontWeight="600">
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
                      <Text>{name}</Text>
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
          <FormControl>
            <FormLabel fontWeight="600">
              Please select a dinner entree
            </FormLabel>

            <RadioGroup>
              <HStack spacing="16px" flexWrap="wrap">
                <Radio value="chicken">Chicken</Radio>
                <Radio value="beef">Beef</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        ) : (
          <FormControl>
            <FormLabel fontWeight="600">
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
                      handleChangeMeal(val, name, "mealChoice")
                    }
                    isDisabled={formData[name]["isAttending"] === "no"}
                  >
                    <Box>
                      <Text>{name}</Text>
                      <HStack>
                        <Radio value="chicken">Chicken</Radio>
                        <Radio value="beef">Beef</Radio>
                      </HStack>
                    </Box>
                  </RadioGroup>

                  <Box flex={1}>
                    <Text>Special requests? (optional)</Text>
                    <Input
                      size="sm"
                      fontSize="md"
                      onChange={(e) =>
                        handleChangeMeal(e.target.value, name, "mealNotes")
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
          <Textarea ref={anythingElseRef} />
        </FormControl>
      </Box>
      <HStack pt="16px" pb="8px" justifyContent="flex-end">
        <Button
          onClick={() => {
            handleSubmit(formData, anythingElseRef.current.value);
          }}
        >
          Submit
        </Button>
      </HStack>
    </Box>
  );
};

export default RSVPForm;
