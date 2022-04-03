import React, { useEffect, useState } from "react";
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
  Textarea,
} from "@chakra-ui/react";

const RSVPForm = ({ guest, relatedGuests, checkedGuests }) => {
  console.log("\n\nRSVP FORM RCVD:", { guest, relatedGuests, checkedGuests });

  const [respondingGuests, setRespondingGuests] = useState([]);
  const [respondingGuestNames, setRespondingGuestNames] = useState([]);
  const [multipleRespondants, setMultipleRespondants] = useState(null);

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
    setRespondingGuestNames(
      rgs.map((rg) => formatName(rg.first_name, rg.last_name))
    );
    setMultipleRespondants(rgs.length > 1);
  }, [relatedGuests, checkedGuests]);

  return (
    <Box
      // overflowY="hidden"
      mb="16px"
      px="16px"
      py="16px"
      // border="1px solid #2d2d2d"
      // flex={1}
      maxH="100%"
    >
      <Text color="text.secondary" h="50px">
        Replying for {`${respondingGuestNames.join(", ")}`}
      </Text>
      <Divider my="12px" />

      <Box
        // border="1px solid red"
        overflowY="hidden"
        flex={1}
        //
      >
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
              {respondingGuestNames.map((name) => {
                return (
                  <RadioGroup mb="8px">
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

        <Divider my="12px" />

        {!multipleRespondants ? (
          <FormControl>
            <FormLabel fontWeight="600">
              Please select a dinner entree
            </FormLabel>

            <RadioGroup>
              <HStack spacing="16px" flexWrap="wrap">
                <Radio value="yes">Chicken</Radio>
                <Radio value="no">Beef</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        ) : (
          <FormControl>
            <FormLabel fontWeight="600">
              Please select a dinner entree for each guest
            </FormLabel>

            {respondingGuestNames.map((name) => {
              return (
                <HStack
                  justifyContent="flex-start"
                  spacing="24px"
                  mb="12px"
                  alignItems="flex-start"
                  h="100%"
                >
                  <RadioGroup h="100%">
                    <Box>
                      <Text>{name}</Text>
                      <HStack>
                        <Radio value="yes">Chicken</Radio>
                        <Radio value="no">Beef</Radio>
                      </HStack>
                    </Box>
                  </RadioGroup>

                  <Box flex={1}>
                    <Text>Special requests?</Text>
                    <Input size="sm" fontSize="md" />
                  </Box>
                </HStack>
              );
            })}
          </FormControl>
        )}
        <Divider my="12px" />
        <FormControl>
          <FormLabel>Anything else we should know? (optional)</FormLabel>
          <Textarea />
        </FormControl>
      </Box>
    </Box>
  );
};

export default RSVPForm;
