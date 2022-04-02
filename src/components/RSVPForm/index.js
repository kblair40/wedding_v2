import React from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  FormControl,
  Input,
  FormLabel,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

const RSVPForm = ({ guest, relatedGuests }) => {
  return (
    <Box>
      <FormControl>
        <FormLabel>
          Who would you like to respond for? (check all that apply)
        </FormLabel>
        <CheckboxGroup>
          <VStack alignItems="flex-start">
            {[guest, ...relatedGuests].map((rg) => {
              const name = `${rg.first_name} ${rg.last_name}`;
              console.log("\nRELATED GUEST:", name, "\n", rg);
              return <Checkbox value={name}>{name}</Checkbox>;
            })}
          </VStack>
        </CheckboxGroup>
      </FormControl>
    </Box>
  );
};

export default RSVPForm;
