import React, { useEffect, useState } from "react";
import {
  HStack,
  Box,
  VStack,
  Button,
  Center,
  Spinner,
  Slide,
  Heading,
  FormControl,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import SelectGuests from "components/RSVPSteps/SelectGuests";
import { getRelatedGuests } from "api/api";
import useUserContext from "hooks/useUserContext";

const SelectGuestsForm = ({
  guest,
  setRelatedGuests,
  relatedGuests,
  handleChangeRespondingGuests,
}) => {
  console.log("\n\nGUEST:", guest);
  const [loading, setLoading] = useState(false);
  // const [relatedGuests, setRelatedGuests] = useState(null);
  const [checkedGuests, setCheckedGuests] = useState([]);
  const [step, setStep] = useState("select guests");

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

  // const handleChangeRespondingGuests = (i) => {
  //   if (checkedGuests.includes(i)) {
  //     setCheckedGuests(checkedGuests.filter((idx) => idx !== i));
  //   } else {
  //     setCheckedGuests([...checkedGuests, i]);
  //   }
  // };
  return (
    <Box px="24px" py="24px" borderRadius="12px">
      {guest ? (
        <Heading>Welcome, {`${guest.first_name} ${guest.last_name}`}!</Heading>
      ) : null}

      <Box>
        <FormControl>
          <FormLabel>
            Who would you like to respond for? (check all that apply)
          </FormLabel>
          {guest && (
            <Checkbox pb="8px" isChecked={true}>
              {`${guest.first_name} ${guest.last_name}`}
            </Checkbox>
          )}

          {guest && relatedGuests && (
            <VStack alignItems="flex-start">
              {[...relatedGuests].map((guest, i) => {
                const name = `${guest.first_name} ${guest.last_name}`;
                return (
                  <Checkbox
                    key={i}
                    value={i}
                    onChange={() => handleChangeRespondingGuests(i)}
                  >
                    {name}
                  </Checkbox>
                );
              })}
            </VStack>
          )}
        </FormControl>
      </Box>

      {/* <SelectGuests
        guest={guest}
        relatedGuests={relatedGuests}
        handleChangeRespondingGuests={handleChangeRespondingGuests}
        // step={step}
      /> */}
    </Box>
  );
};

export default SelectGuestsForm;
