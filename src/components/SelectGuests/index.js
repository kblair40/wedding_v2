import React from "react";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";

// import useUserContext from "hooks/useUserContext";

const SelectGuests = ({
  guest,
  relatedGuests,
  handleChangeRespondingGuests,
}) => {
  // const { user } = useUserContext();

  return (
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

        {guest && (
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
  );
};

export default SelectGuests;
