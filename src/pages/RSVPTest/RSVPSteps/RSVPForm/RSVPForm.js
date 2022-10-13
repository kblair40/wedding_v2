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

// import RSVPSuccessModal from "components/RSVPSteps_old/RSVPSuccessModal";

const RSVPForm = ({ guestNames, handleSubmit, startOver }) => {
  const [multipleRespondants, setMultipleRespondants] = useState(null);
  const [attendingNames, setAttendingNames] = useState([]);
  const [formData, setFormData] = useState(null);
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const anythingElseRef = useRef();

  const formatName = (fn, ln) => {
    return `${fn} ${ln}`;
  };

  useEffect(() => {
    if (!guestNames) return;

    let multipleRespondants = guestNames.length > 1;
    setMultipleRespondants(multipleRespondants);

    const blankFormData = { attending: undefined };

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
  }, [guestNames]);

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
    let res = await handleSubmit({
      ...formData,
      special_requests: anythingElseRef.current.value,
    });
  };

  return (
    <Box maxW="580px" mb="16px" px="16px" py="16px" maxH="100%" w="100%">
      <Box overflowY="hidden" flex={1}>
        <FormControl>
          <React.Fragment>
            <FormLabel fontWeight="500" mb="1rem">
              Please let us know who can and cannot make it
            </FormLabel>

            {guestNames && guestNames.length
              ? guestNames.map((name, i) => {
                  return (
                    <RadioGroup
                      key={i}
                      mb="16px"
                      onChange={(val) => handleChangeAttendance(val, name)}
                    >
                      <Box>
                        <Text
                          textTransform="capitalize"
                          fontWeight="600"
                          fontSize="lg"
                        >
                          {name}
                        </Text>
                        <HStack spacing="16px">
                          <Radio value="yes">I'll be there!</Radio>
                          <Radio value="no">Regretfully decline</Radio>
                        </HStack>
                      </Box>
                    </RadioGroup>
                  );
                })
              : null}
          </React.Fragment>
        </FormControl>

        <Divider my="16px" />

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
  );
};

export default RSVPForm;
