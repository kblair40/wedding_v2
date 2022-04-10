import React from "react";
import {
  Text,
  Button,
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  Stack,
} from "@chakra-ui/react";

import { addGuest } from "api/api";
import { MAX_WIDTHS } from "utils/constants";
import PageContainer from "components/containers/PageContainer";
import ToDoToEatCard from "components/containers/ToDoToEatCard";

const ToDoToEat = () => {
  return (
    <PageContainer center px={{ base: 0, md: "24px" }}>
      <Flex
        // border="1px solid green"
        justify="center"
        mt="36px"
        w="100%"
        pb="32px"
      >
        <Flex
          maxW={{
            // base: "420px",
            // sm: "480px",
            md: "720px",
            lg: "900px",
          }}
          // maxW={MAX_WIDTHS()}
          justify="center"
          w="100%"
          // border="1px solid red"
        >
          <Stack
            // border="1px solid red"
            spacing={{ base: "16px" }}
            direction={{ base: "column", md: "row" }}
            justifyContent="center"
            w="100%"
          >
            <Box>
              <ToDoToEatCard heading="Eat" />
            </Box>
            <Box>
              <ToDoToEatCard heading="Drink" />
            </Box>
            <Box>
              <ToDoToEatCard heading="Play" />
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </PageContainer>
  );
};

export default ToDoToEat;

// const addNewGuest = () => {
//   addGuest({
//     firstName: "fakefn2",
//     lastName: "fakeln2",
//     email: "email1@email.com",
//     phoneNumber: "123.456.4321",
//     side: "groom",
//     entree: "beef",
//   });
// };

{
  /* <Button onClick={addNewGuest} size="sm">
  Add Guest
</Button> */
}
