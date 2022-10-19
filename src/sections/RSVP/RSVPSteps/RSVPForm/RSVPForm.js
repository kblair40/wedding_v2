import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Radio,
  RadioGroup,
  Text,
  Divider,
  Button,
  Textarea,
  Tooltip,
  Flex,
} from "@chakra-ui/react";

const RSVPForm = ({ guestNames, handleSubmit }) => {
  const [attendingNames, setAttendingNames] = useState([]);
  const [formData, setFormData] = useState(null);
  const [preventSubmit, setPreventSubmit] = useState(true);
  const [saving, setSaving] = useState(false);

  const anythingElseRef = useRef();

  useEffect(() => {
    if (!guestNames) return;

    const blankFormData = { attending: undefined };

    let blankDataObjects = {};

    for (let name of guestNames) {
      blankDataObjects[name] = blankFormData;
    }

    setFormData(blankDataObjects);
  }, [guestNames]);

  const handleChangeAttendance = (val, name) => {
    let revisedFormData = {
      ...formData,
      [name]: { ...formData[name], attending: val },
    };
    setFormData(revisedFormData);

    if (val === "yes") {
      if (!attendingNames.includes(name)) {
        setAttendingNames([...attendingNames, name]);
      }
    } else if (val === "no") {
      if (attendingNames.includes(name)) {
        setAttendingNames([...attendingNames].filter((n) => n !== name));
      }
    }

    // console.log("revisedFormData:", revisedFormData);
    for (let guest in revisedFormData) {
      if (revisedFormData[guest].attending === undefined) {
        setPreventSubmit(true);
        return;
      }
    }
    setPreventSubmit(false);
  };

  const sendFormData = async () => {
    setSaving(true);
    try {
      await handleSubmit(formData, anythingElseRef.current.value);
      // console.log("SAVE RES:", res);
      setFormData(null);
      setAttendingNames([]);
      anythingElseRef.current.value = "";
    } catch (e) {
      console.error("FAILURE");
    }

    setSaving(false);
  };

  return (
    <Flex
      maxW={{ base: "300px", sm: "480px" }}
      mb="16px"
      px="16px"
      py="16px"
      maxH="100%"
      w="100%"
      direction="column"
      align="center"
    >
      <Flex
        direction="column"
        align="center"
        overflowY="hidden"
        flex={1}
        mb="1rem"
      >
        <FormControl w={{ base: "100%", sm: "max-content" }}>
          <React.Fragment>
            <FormLabel textAlign="center" fontWeight="500" mb="1rem">
              Please let us know who can and cannot make it
            </FormLabel>

            <Box>
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
                          <Stack
                            direction={{ base: "column", sm: "row" }}
                            mt="4px"
                            spacing={{ base: "8px", sm: "16px", md: "28px" }}
                          >
                            <Radio
                              fontSize={{ base: "sm", sm: "md" }}
                              value="yes"
                            >
                              I'll be there!
                            </Radio>
                            <Radio
                              fontSize={{ base: "sm", sm: "md" }}
                              value="no"
                            >
                              Regretfully decline
                            </Radio>
                          </Stack>
                        </Box>
                      </RadioGroup>
                    );
                  })
                : null}
            </Box>
          </React.Fragment>
        </FormControl>

        <Divider my="12px" borderColor="transparent" />

        <FormControl>
          <FormLabel>Anything else we should know? (optional)</FormLabel>
          <Textarea
            bg="gray.50"
            borderColor="gray.200"
            focusBorderColor="gray.400"
            transition="background 0.3s"
            _hover={{ bg: "white" }}
            _focus={{ bg: "white" }}
            ref={anythingElseRef}
          />
        </FormControl>
      </Flex>

      <HStack justifyContent="flex-end">
        <Tooltip
          zIndex={10000000}
          placement="bottom-end"
          isDisabled={!preventSubmit}
          label="Please select an attendance option for all guests"
        >
          <Box>
            <Button
              isDisabled={preventSubmit}
              mt="8px"
              onClick={sendFormData}
              isLoading={saving}
              w="100px"
              bg="gray.50"
              size="lg"
              border="1px solid transparent"
              transition="all 0.3s"
              boxSizing="content-box"
              _hover={{
                borderColor: "gray.300",
                bg: "white",
              }}
              _active={{
                bg: "white",
              }}
            >
              Submit
            </Button>
          </Box>
        </Tooltip>
      </HStack>
    </Flex>
  );
};

export default RSVPForm;
